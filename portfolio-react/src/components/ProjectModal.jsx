import React, { useEffect } from 'react';

// Este componente é o Modal que aparece sobre a tela.
const ProjectModal = ({ isOpen, content, onClose }) => {
    
    // Para fechar ao pressionar ESC (melhor UX)
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);

    // Se não estiver aberto, não renderiza nada
    if (!isOpen) return null;

    // Desestruturação do conteúdo do projeto (com defaults para evitar erros)
    const { 
        title = '', 
        description = '', 
        imageSrc = '', 
        tags = [], 
        viewLink = '#', 
        githubLink = '#' 
    } = content;

    return (
        // O estilo 'display: block' é simulado aqui
        // O onClick no div modal serve para fechar o modal se o usuário clicar fora do conteúdo principal
        <div id="projectModal" className="modal" onClick={onClose}> 
            
            {/* O onClick no modal-content precisa ser parado (stopPropagation) para não fechar o modal
               ao clicar DENTRO dele. */}
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close-btn" onClick={onClose}>&times;</span>
                
                <img id="modalImage" src={imageSrc} alt={`Imagem do Projeto: ${title}`} />
                
                <div className="modal-details">
                    <h3 id="modalTitle">{title}</h3>
                    <p id="modalDescription">{description}</p>
                    
                    <div id="modalTags" className="project-tags">
                        {tags.map((tag, index) => (
                            <span key={index}>{tag}</span>
                        ))}
                    </div>
                    
                    <div className="modal-actions">
                        <a id="modalViewProject" href={viewLink} target="_blank" rel="noopener noreferrer" className="btn secondary small">Ver Projeto</a>
                        <a id="modalGitHub" href={githubLink} target="_blank" rel="noopener noreferrer" className="btn primary small">GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;