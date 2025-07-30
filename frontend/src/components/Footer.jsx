import React from 'react';
import { BookOpen, Facebook, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import { contactInfo } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <BookOpen className="h-8 w-8 text-yellow-400" />
                <div>
                  <h3 className="text-2xl font-bold">Beit Nevi'im</h3>
                  <p className="text-gray-300">Curso Teológico</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Formando líderes cristãos com sólida base bíblica e preparação ministerial 
                para impactar o Reino de Deus na terra.
              </p>
              
              {/* Social Media */}
              <div className="flex space-x-4">
                <a 
                  href={contactInfo.socialMedia.facebook}
                  className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="#"
                  className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="#"
                  className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-yellow-400">Links Rápidos</h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => scrollToSection('home')}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                  >
                    Início
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                  >
                    Sobre o Curso
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('curriculum')}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                  >
                    Grade Curricular
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('professors')}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                  >
                    Professores
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('gallery')}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                  >
                    Galeria
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-yellow-400">Contato</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {contactInfo.address}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">{contactInfo.phone}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">{contactInfo.email}</p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="mt-6">
                <h5 className="font-semibold text-yellow-400 mb-2">Horário de Atendimento</h5>
                <div className="text-gray-300 text-sm space-y-1">
                  <p>Seg - Sex: 8h às 18h</p>
                  <p>Sábado: 8h às 12h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm text-center md:text-left">
                © {currentYear} Curso Teológico Beit Nevi'im. Todos os direitos reservados.
              </div>
              
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                  Política de Privacidade
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                  Termos de Uso
                </a>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  Contato
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;