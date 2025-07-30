import React, { useState } from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Menu, X, User, BookOpen } from 'lucide-react';

const Header = ({ onLoginSuccess }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock login - in real app, this would make API call
    if (loginData.email && loginData.password) {
      localStorage.setItem('user', JSON.stringify({ email: loginData.email, name: 'Usuário' }));
      onLoginSuccess && onLoginSuccess();
      setLoginData({ email: '', password: '' });
    }
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <BookOpen className="h-8 w-8 text-yellow-400" />
            <div>
              <h1 className="text-xl font-bold">Beit Nevi'im</h1>
              <p className="text-sm text-gray-300">Curso Teológico</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('curriculum')}
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              Grade Curricular
            </button>
            <button 
              onClick={() => scrollToSection('professors')}
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              Professores
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              Galeria
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              Contato
            </button>
          </nav>

          {/* Login Button */}
          <div className="hidden md:flex">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold">
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-gray-100">
                <DialogHeader>
                  <DialogTitle className="text-gray-900">Área do Aluno</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <Label htmlFor="email" className="text-gray-900">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={loginData.email}
                      onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                      className="border-gray-300"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="password" className="text-gray-900">Senha</Label>
                    <Input
                      id="password"
                      type="password"
                      value={loginData.password}
                      onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                      className="border-gray-300"
                      placeholder="Sua senha"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900">
                    Entrar
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left hover:text-yellow-400 transition-colors duration-300"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left hover:text-yellow-400 transition-colors duration-300"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('curriculum')}
                className="text-left hover:text-yellow-400 transition-colors duration-300"
              >
                Grade Curricular
              </button>
              <button 
                onClick={() => scrollToSection('professors')}
                className="text-left hover:text-yellow-400 transition-colors duration-300"
              >
                Professores
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-left hover:text-yellow-400 transition-colors duration-300"
              >
                Galeria
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left hover:text-yellow-400 transition-colors duration-300"
              >
                Contato
              </button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold justify-start">
                    <User className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-gray-100">
                  <DialogHeader>
                    <DialogTitle className="text-gray-900">Área do Aluno</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                      <Label htmlFor="mobile-email" className="text-gray-900">Email</Label>
                      <Input
                        id="mobile-email"
                        type="email"
                        value={loginData.email}
                        onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                        className="border-gray-300"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="mobile-password" className="text-gray-900">Senha</Label>
                      <Input
                        id="mobile-password"
                        type="password"
                        value={loginData.password}
                        onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                        className="border-gray-300"
                        placeholder="Sua senha"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900">
                      Entrar
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;