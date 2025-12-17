// src/components/ScrollAnimator.jsx

import { useEffect, useCallback, useRef } from 'react';

const ScrollAnimator = ({ setVisibleSectionId }) => {
  const HEADER_OFFSET = 70;

  const handleAnimationIntersect = useCallback((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Quando entra na tela: Adiciona a classe de animação
        entry.target.classList.add('animate-visible');
      } else {
        // === COMPORTAMENTO IGUAL AO ANTIGO ===
        // Quando sai da tela (para cima ou para baixo): Remove a classe
        // Isso permite que a animação ocorra toda vez que você voltar à seção
        entry.target.classList.remove('animate-visible');
      }
    });
  }, []);

  const handleSectionIntersect = useCallback((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
        setVisibleSectionId(`#${entry.target.id}`);
      }
    });
  }, [setVisibleSectionId]);

  useEffect(() => {
    // 1. Sticky Navbar Shadow
    const header = document.getElementById('navbar');
    const handleScroll = () => {
      if (header) {
        header.style.boxShadow = window.scrollY > 50 
          ? '0 4px 8px rgba(0,0,0,0.15)' 
          : '0 2px 4px rgba(0, 0, 0, 0.1)';
      }
    };
    window.addEventListener('scroll', handleScroll);

    // 2. Observer para Animações (Loop Infinito)
    const animationObserver = new IntersectionObserver(handleAnimationIntersect, {
      threshold: 0.1, // Dispara quando 10% do elemento aparece
    });

    // 3. Observer para Scroll Spy
    const sectionObserver = new IntersectionObserver(handleSectionIntersect, {
      rootMargin: `-${HEADER_OFFSET}px 0px -40% 0px`,
      threshold: [0.1, 0.5],
    });

    // Iniciar Observação
    document.querySelectorAll('.animate-on-scroll').forEach(el => animationObserver.observe(el));
    document.querySelectorAll('main section[id]').forEach(sec => sectionObserver.observe(sec));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      animationObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, [handleAnimationIntersect, handleSectionIntersect]);

  return null;
};

export default ScrollAnimator;