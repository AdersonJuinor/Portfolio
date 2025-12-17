import React, { useState } from 'react';

const Footer = () => {
    // Estado para exibir o ano dinamicamente
    const [currentYear] = useState(new Date().getFullYear());
    
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {currentYear} Aderson Junior - Modelo de Portfólio. Todos os direitos reservados.</p>
                <div className="social-links-footer">
                    <a href="https://www.linkedin.com/in/aderson-junior-009387346" target="_blank" title="LinkedIn" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/AdersonJuinor" target="_blank" title="GitHub" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                </div>
            </div>
            {/* O link "Voltar ao Topo" ainda usa o href puro, o scroll suave é tratado pelo navegador/CSS */}
            <a href="#home" className="back-to-top" title="Voltar ao Topo"><i className="fas fa-chevron-up"></i></a>
        </footer>
    );
};

export default Footer;