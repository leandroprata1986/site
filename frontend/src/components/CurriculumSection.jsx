import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { BookOpen, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { curriculum } from '../mock';

const CurriculumSection = () => {
  const [expandedSemester, setExpandedSemester] = useState(null);

  const toggleSemester = (semesterId) => {
    setExpandedSemester(expandedSemester === semesterId ? null : semesterId);
  };

  return (
    <section id="curriculum" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Grade <span className="text-yellow-600">Curricular</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Um currículo abrangente e estruturado para sua formação teológica completa, 
              desenvolvido ao longo de 4 semestres com disciplinas essenciais.
            </p>
          </div>

          {/* Course Overview */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-gray-200 hover:border-yellow-400 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <BookOpen className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">16+</h3>
                <p className="text-gray-600">Disciplinas Essenciais</p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:border-yellow-400 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Calendar className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">2 Anos</h3>
                <p className="text-gray-600">Duração do Curso</p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:border-yellow-400 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="h-12 w-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  4
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Semestres</h3>
                <p className="text-gray-600">Organização Acadêmica</p>
              </CardContent>
            </Card>
          </div>

          {/* Curriculum Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {curriculum.map((semester) => (
              <Card 
                key={semester.id}
                className="border-gray-200 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg overflow-hidden"
              >
                <CardHeader 
                  className="bg-gradient-to-r from-gray-900 to-gray-800 text-white cursor-pointer"
                  onClick={() => toggleSemester(semester.id)}
                >
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl font-bold">
                      {semester.semester}
                    </CardTitle>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-yellow-500 text-gray-900 hover:bg-yellow-600">
                        {semester.subjects.length} disciplinas
                      </Badge>
                      {expandedSemester === semester.id ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-0">
                  <div className={`transition-all duration-300 overflow-hidden ${
                    expandedSemester === semester.id ? 'max-h-96' : 'max-h-0'
                  }`}>
                    <div className="p-6">
                      <div className="space-y-3">
                        {semester.subjects.map((subject, subjectIndex) => (
                          <div 
                            key={subjectIndex}
                            className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-yellow-50 transition-colors duration-200"
                          >
                            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                            <span className="text-gray-800 font-medium">{subject}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Always visible preview */}
                  {expandedSemester !== semester.id && (
                    <div className="p-6">
                      <div className="space-y-2">
                        {semester.subjects.slice(0, 2).map((subject, subjectIndex) => (
                          <div 
                            key={subjectIndex}
                            className="flex items-center space-x-3 text-gray-600"
                          >
                            <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                            <span className="text-sm">{subject}</span>
                          </div>
                        ))}
                        {semester.subjects.length > 2 && (
                          <div className="text-sm text-gray-500 ml-4">
                            e mais {semester.subjects.length - 2} disciplina{semester.subjects.length - 2 > 1 ? 's' : ''}...
                          </div>
                        )}
                      </div>
                      
                      <Button 
                        onClick={() => toggleSemester(semester.id)}
                        variant="ghost" 
                        className="w-full mt-4 text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50"
                      >
                        Ver todas as disciplinas
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-2xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">
                Metodologia de <span className="text-yellow-400">Ensino</span>
              </h3>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div>
                  <h4 className="font-semibold text-yellow-400 mb-2">Aulas Expositivas</h4>
                  <p className="text-gray-300 text-sm">Conteúdo ministrado por professores especialistas</p>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-400 mb-2">Estudos Dirigidos</h4>
                  <p className="text-gray-300 text-sm">Pesquisa e aprofundamento individual</p>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-400 mb-2">Prática Ministerial</h4>
                  <p className="text-gray-300 text-sm">Aplicação prática dos conhecimentos adquiridos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;