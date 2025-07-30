import React from 'react';
import { Button } from './ui/button';
import { BookOpen, Users, Award, Clock } from 'lucide-react';
import { courseInfo } from '../mock';

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-yellow-400">Curso Teológico</span>
            <br />
            <span className="text-gray-100">Beit Nevi'im</span>
          </h1>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            {courseInfo.description}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300">
              <Clock className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-yellow-400">{courseInfo.duration}</div>
              <div className="text-gray-300 text-sm">Duração</div>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300">
              <BookOpen className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-yellow-400">16+</div>
              <div className="text-gray-300 text-sm">Disciplinas</div>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300">
              <Users className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-yellow-400">4</div>
              <div className="text-gray-300 text-sm">Professores</div>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300">
              <Award className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-yellow-400">100+</div>
              <div className="text-gray-300 text-sm">Formados</div>
            </div>
          </div>

          {/* Course Details */}
          <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 mb-10">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Modalidade</h3>
                <p className="text-gray-300">{courseInfo.modality}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Investimento</h3>
                <p className="text-gray-300">{courseInfo.price}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Próxima Turma</h3>
                <p className="text-gray-300">{courseInfo.nextStart}</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToContact}
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Inscreva-se Agora
            </Button>
            <Button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 font-bold py-3 px-8 text-lg rounded-lg transition-all duration-300"
            >
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;