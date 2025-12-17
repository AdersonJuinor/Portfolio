import React, { useEffect, useRef, useState } from 'react';

const skillData = [
    { icon: "fab fa-python", title: "Python", description: "Linguagem principal para lógica e dados." },
    { icon: "fas fa-leaf", title: "Django", description: "Desenvolvimento Back-end robusto e seguro." },
    { icon: "fab fa-react", title: "React", description: "Desenvolvimento Front-end dinâmico." },
    { icon: "fas fa-database", title: "Databases", description: "PostgreSQL e MySQL." },
    { icon: "fab fa-docker", title: "Docker", description: "Conteinerização e Microserviços." },
    { icon: "fab fa-git-alt", title: "Git", description: "Controle de versão e CI/CD." }
];

const Skills = () => {
    const skillsRef = useRef(null);
    // Controla se a seção já apareceu na tela
    const [hasAnimated, setHasAnimated] = useState(false); 

    // Efeito para observar a seção e disparar a animação
    useEffect(() => {
        if (!skillsRef.current) return;

        const observerOptions = {
            root: null,
            threshold: 0.2 // Dispara quando 20% da seção está visível
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true); // Dispara o estado para mudar a largura das barras
                    observer.unobserve(skillsRef.current);
                }
            });
        }, observerOptions);

        observer.observe(skillsRef.current);

        return () => {
            if (skillsRef.current) observer.unobserve(skillsRef.current);
        };
    }, [hasAnimated]); // O efeito roda novamente se 'hasAnimated' mudar (apenas uma vez)

    return (
        <section id="habilidades" className="skills-section section" ref={skillsRef}>
            <h2 className="section-title animate-on-scroll" data-animation="slide-in-left" data-delay="0s">Habilidades</h2>
            <p className="section-slogan animate-on-scroll" data-animation="fade-in-up" data-delay="0.2s">Ferramentas e tecnologias que utilizo no meu dia a dia.</p>
            
            <div className="skills-grid">
                {skillData.map((skill, index) => (
                    <div 
                        key={index}
                        className="skill-item animate-on-scroll" 
                        data-animation="fade-in-up" 
                        data-delay={`${skill.delay}s`}
                    >
                        <i className={`${skill.icon} fa-3x`}></i>
                        <h3>{skill.title}</h3>
                        <p>{skill.description}</p>
                        <div className="progress-container">
                            <div 
                                className="progress-bar" 
                                // A largura é definida condicionalmente, disparando a transição CSS
                                style={{ width: hasAnimated ? `${skill.level}%` : '0%' }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;