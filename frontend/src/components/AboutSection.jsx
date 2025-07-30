import React from 'react';
import { Card, CardContent } from './ui/card';
import { BookOpen, Heart, Star, Target, CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-yellow-500" />,
      title: "Base Bíblica Sólida",
      description: "Estudo aprofundado das Escrituras Sagradas com hermenêutica responsável e contextualizada."
    },
    {
      icon: <Heart className="h-8 w-8 text-yellow-500" />,
      title: "Formação Integral",
      description: "Desenvolvimento espiritual, intelectual e prático para um ministério equilibrado."
    },
    {
      icon: <Star className="h-8 w-8 text-yellow-500" />,
      title: "Professores Qualificados",
      description: "Corpo docente com alta qualificação acadêmica e experiência ministerial."
    },
    {
      icon: <Target className="h-8 w-8 text-yellow-500" />,
      title: "Metodologia Moderna",
      description: "Ensino presencial e online com recursos tecnológicos avançados."
    }
  ];

  const objectives = [
    "Formar líderes cristãos com sólido conhecimento bíblico-teológico",
    "Capacitar para o ministério pastoral e missionário",
    "Desenvolver competências em hermenêutica e homilética",
    "Promover o estudo das línguas bíblicas originais",
    "Fomentar uma teologia contextualizada e relevante"
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sobre o <span className="text-yellow-600">Curso</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              O Curso Teológico Beit Nevi'im oferece uma formação teológica completa, 
              combinando rigor acadêmico com aplicação prática para o ministério cristão contemporâneo.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="border-gray-200 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Uma Formação que <span className="text-yellow-600">Transforma</span>
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Nosso curso é mais que um programa acadêmico - é uma jornada de transformação 
                que prepara servos de Deus para impactar o Reino com conhecimento, sabedoria e unção.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Com uma abordagem que equilibra o estudo das Escrituras, a história da Igreja, 
                e as demandas contemporâneas do ministério, formamos líderes preparados para 
                os desafios do século XXI.
              </p>

              {/* Mission Statement */}
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Nossa Missão</h4>
                <p className="text-gray-700 italic leading-relaxed">
                  "Formar servos de Deus comprometidos com a Palavra, capacitados para o ministério 
                  e dedicados ao avanço do Reino de Deus na terra."
                </p>
              </div>
            </div>

            {/* Right Content - Objectives */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Nossos <span className="text-yellow-600">Objetivos</span>
              </h3>
              
              <div className="space-y-4">
                {objectives.map((objective, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 leading-relaxed">{objective}</p>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-2 gap-6">
                <div className="bg-gray-900 text-white p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-yellow-400">15+</div>
                  <div className="text-gray-300">Anos de Tradição</div>
                </div>
                <div className="bg-gray-900 text-white p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-yellow-400">95%</div>
                  <div className="text-gray-300">Satisfação dos Alunos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;