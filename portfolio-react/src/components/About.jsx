import React from 'react';

const About = () => {
    return (
        <section id="sobre" className="about-section section">
            <h2 className="section-title animate-on-scroll" data-animation="slide-in-right" data-delay="0s">Sobre Mim</h2>
            <div className="about-content">
                <p className="animate-on-scroll" data-animation="fade-in-up" data-delay="0.2s">
                    Minha jornada na tecnologia começou com uma paixão por resolver problemas complexos e criar soluções elegantes. Sou desenvolvedor Full-Stack, com experiência em tecnologias como React, Node.js e Docker.
                </p>
                <p className="animate-on-scroll" data-animation="fade-in-up" data-delay="0.4s">
                    Atualmente, foco em arquitetura de microserviços e em otimizar a performance de aplicações para garantir a melhor experiência ao usuário. Sou proativo, apaixonado por aprendizado contínuo e sempre busco as melhores práticas no desenvolvimento de software.
                </p>
            </div>
        </section>
    );
};

export default About;