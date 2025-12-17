import React from 'react';

// Dados dos projetos
const projectData = [
    {
        title: "SafeDose", 
        description: "Ferramenta de apoio para profissionais da saúde",
        imageSrc: "/safedose.png",
        tags: ["Flask", "SQLite", "Python", "JavaScript", "HTML", "CSS"],
        viewLink: "https://safedose.onrender.com/entrar",
        githubLink: "https://github.com/AdersonJuinor/SafeDose"
    },
    {
        title: "Diario Digital", 
        description: "Site para relacionamento. Onde voce pode fazer uma homenagem para seu parceiro, ver a linha do tempo com a contagem de dias e albuns com memorias do casal.",
        imageSrc: "/diariodigital.png",
        tags: ["Flask", "Python", "HTML", "CSS", "SQLite"],
        viewLink: "https://diario-digital-mcvz.onrender.com",
        githubLink: "https://github.com/AdersonJuinor/diario-digital"
    },
    {
        title: "Portfolio RPG", 
        description: "Site interativo com temática de RPG, desenvolvido do zero. Combina design imersivo e lógica personalizada para representar o estilo e a trajetória do usuário de forma única.",
        imageSrc: "/rpg.png",
        tags: ["JavaScript", "HTML", "CSS"],
        viewLink: "https://rickzgg27.github.io/Portfolio/",
        githubLink: "https://github.com/rickzgg27/Portfolio"
    },
];

// O componente recebe a função openModal do App.jsx
const Projects = ({ openModal }) => {
    
    // Função que coleta todos os dados e abre o modal
    const handleImageClick = (project) => {
        openModal(project);
    };

    return (
        <section id="projetos" className="projects-section section">
            <h2 className="section-title animate-on-scroll" data-animation="slide-in-right" data-delay="0s">Meus Projetos</h2>
            <p className="section-slogan animate-on-scroll" data-animation="fade-in-up" data-delay="0.2s">Confira alguns trabalhos que realizei e as tecnologias utilizadas.</p>
            
            <div className="projects-grid">
                {projectData.map((project, index) => (
                    <div 
                        key={index}
                        className="project-card animate-on-scroll" 
                        data-animation="fade-in-up" 
                        data-delay={`${0.3 + index * 0.1}s`}
                    >
                        <div 
                            className="project-image-container"
                            // Chama a função de abertura do modal ao clicar
                            onClick={() => handleImageClick(project)}
                        >
                            <img src={project.imageSrc} alt={`Imagem do Projeto ${project.title}`} className="project-image" />
                        </div>
                        
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        
                        <div className="project-tags">
                            {project.tags.map((tag, tagIndex) => (
                                <span key={tagIndex}>{tag}</span>
                            ))}
                        </div>
                        
                        <div className="project-actions">
                            <a href={project.viewLink} className="btn secondary small" target="_blank" rel="noopener noreferrer">Ver Projeto</a>
                            <a href={project.githubLink} className="btn primary small" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;