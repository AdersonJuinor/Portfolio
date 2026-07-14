import React from 'react';

// Dados dos projetos
const projectData = [
    {
        title: "SafeDose", 
        description: "",
        imageSrc: "/safedose.png",
        tags: ["Flask", "SQLite", "Python", "JavaScript", "HTML", "CSS"],
        viewLink: "https://safedose.onrender.com/entrar",
       
    },
    {
        title: "Clínica", 
        description: "",
        imageSrc: "/clinica.png",
        tags: [ "HTML", "CSS", "JavaScript"],
        viewLink: "https://clinicas-eta.vercel.app",
    },
    {
        title: "Dentista", 
        description: "",
        imageSrc: "/dentista.png",
        tags: ["JavaScript", "HTML", "CSS"],
        viewLink: "https://dentistas-rho.vercel.app",
    },
    {
        title: "Advogado", 
        description: "",
        imageSrc: "/advogado.png",
        tags: ["JavaScript", "HTML", "CSS"],
        viewLink: "https://advogados-drab.vercel.app",
    },
    {
        title: "Restaurante", 
        description: "",
        imageSrc: "/restaurante.png",
        tags: ["JavaScript", "HTML", "CSS"],
        viewLink: "https://restaurantes-8b7n.vercel.app",
    },
    {
        title: "Imobiliária", 
        description: "",
        imageSrc: "/imobiliaria.png",
        tags: ["JavaScript", "HTML", "CSS"],
        viewLink: "https://imobilirias.vercel.app",
    },
    {
        title: "Contadores", 
        description: "",
        imageSrc: "/contadores.png",
        tags: ["JavaScript", "HTML", "CSS"],
        viewLink: "https://contadores-ruddy.vercel.app",
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
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;