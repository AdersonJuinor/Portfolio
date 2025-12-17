import React, { useState, useEffect } from 'react';

// Importa o arquivo CSS principal
import './index.css'; 

// Importa todos os componentes da aplicação
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';

// Importa o componente que lida com o Intersection Observer
import ScrollAnimator from './components/ScrollAnimator'; 

const App = () => {
  // 1. nao sei pq isso tem que ficar aqui, mas se tirar da erro
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // 2. Estado para o Modal (Lightbox)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  
  // 3. Estado para o Scroll Spy (qual seção está ativa)
  const [activeSection, setActiveSection] = useState('#home'); 


  // ===========================================
  // FUNÇÕES GLOBAIS PASSADAS VIA PROPS
  // ===========================================

  // Função para alternar o tema (passada para o Header)
  const toggleTheme = () => setIsDarkMode(prev => !prev);
  
  // Funções para gerenciar o modal de projetos (passadas para o Projects)
  const openProjectModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setModalContent({});
  };
  
  // Função para atualizar a seção ativa (passada para o ScrollAnimator)
  const updateActiveSection = (id) => {
    // console.log("Seção ativa atualizada para:", id); // Opcional para debug
    setActiveSection(id);
  };


  // ===========================================
  // RENDERIZAÇÃO
  // ===========================================

  return (
    <div className="portfolio-app">
      {/* O menu-overlay é controlado pelo CSS/Header */}
      <div className="menu-overlay"></div> 
      
      <Header 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme} 
        activeSection={activeSection} // Passa o estado da seção ativa
      />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects openModal={openProjectModal} />
        <Contact />
      </main>
      
      {/* Componente invisível que contém toda a lógica de scroll/animação */}
      <ScrollAnimator setVisibleSectionId={updateActiveSection} /> 
      
      <ProjectModal 
        isOpen={isModalOpen}
        content={modalContent}
        onClose={closeProjectModal}
      /> 
      
      <Footer />
    </div>
  );
};

export default App;