import React from 'react';      

const Hero = () => {
    return (
        <section id="home" className="hero-section section">
            <div className="hero-content animate-on-scroll" data-animation="slide-in-left" data-delay="0s">
                <h1>Olá, eu sou o Aderson Junior</h1>
                {/* Aqui você pode colocar uma frase estática no lugar do typed.js */}
                <h2>Desenvolvedor Full-Stack, Focado em Performance e Escalabilidade.</h2>
                <p>Transformando ideias em experiências web rápidas, escaláveis e com foco em performance.</p>
                <div className="cta-buttons">
                    <a href="#contato" className="btn secondary">Entrar em contato</a>
                </div>
            </div>
            <div className="hero-image animate-on-scroll" data-animation="fade-in-up" data-delay="0.4s">
                <img src="src/assets/img/eu.jpg" alt="Foto de Perfil de Aderson Junior" /> 
            </div>
        </section>
    );
};

export default Hero;