import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import CurriculumSection from "./components/CurriculumSection";
import ProfessorsSection from "./components/ProfessorsSection";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

const Home = () => {
  const handleLoginSuccess = () => {
    // Mock login success handling
    console.log("Login realizado com sucesso!");
  };

  return (
    <div className="min-h-screen">
      <Header onLoginSuccess={handleLoginSuccess} />
      <HeroSection />
      <AboutSection />
      <CurriculumSection />
      <ProfessorsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;