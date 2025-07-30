import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { User, GraduationCap, Award } from 'lucide-react';
import { professors } from '../mock';

const ProfessorsSection = () => {
  return (
    <section id="professors" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nossos <span className="text-yellow-600">Professores</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Conheça o corpo docente qualificado do Curso Teológico Beit Nevi'im. 
              Professores com sólida formação acadêmica e experiência ministerial.
            </p>
          </div>

          {/* Professors Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {professors.map((professor) => (
              <Card 
                key={professor.id}
                className="border-gray-200 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg group overflow-hidden"
              >
                <CardContent className="p-0">
                  {/* Professor Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={professor.image}
                      alt={professor.name}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Professor Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {professor.name}
                    </h3>
                    
                    <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 mb-3">
                      {professor.specialty}
                    </Badge>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {professor.credentials}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Faculty Excellence Section */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 md:p-12 rounded-2xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">
                  Excelência <span className="text-yellow-400">Acadêmica</span>
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Nosso corpo docente é formado por mestres e doutores com ampla experiência 
                  no ensino teológico e ministério pastoral. Cada professor traz uma riqueza 
                  de conhecimento prático e acadêmico para enriquecer sua formação.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="h-5 w-5 text-yellow-400" />
                    <span className="text-gray-300">Formação em renomadas instituições teológicas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-yellow-400" />
                    <span className="text-gray-300">Experiência ministerial comprovada</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <User className="h-5 w-5 text-yellow-400" />
                    <span className="text-gray-300">Metodologia de ensino personalizada</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
                  <div className="text-gray-300">Mestres e Doutores</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">25+</div>
                  <div className="text-gray-300">Anos de Experiência Média</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
                  <div className="text-gray-300">Alunos Orientados</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
                  <div className="text-gray-300">Publicações Acadêmicas</div>
                </div>
              </div>
            </div>
          </div>

          {/* Teaching Philosophy */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Nossa <span className="text-yellow-600">Filosofia de Ensino</span>
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-yellow-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Ensino Bíblico</h4>
                <p className="text-gray-600 leading-relaxed">
                  Fundamentação sólida nas Escrituras Sagradas como base de todo conhecimento teológico.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-8 w-8 text-yellow-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Mentoria Pessoal</h4>
                <p className="text-gray-600 leading-relaxed">
                  Acompanhamento individual para o desenvolvimento espiritual e acadêmico de cada aluno.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-yellow-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Excelência Acadêmica</h4>
                <p className="text-gray-600 leading-relaxed">
                  Rigor acadêmico aliado à formação prática para um ministério efetivo e relevante.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessorsSection;