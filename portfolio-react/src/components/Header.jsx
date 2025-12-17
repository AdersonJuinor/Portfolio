import React, { useState } from 'react';

// O componente Header agora recebe três props do App.jsx:
// 1. isDarkMode: O estado atual do tema
// 2. toggleTheme: A função para mudar o tema
// 3. activeSection: O ID da seção atualmente visível (para o Scroll Spy)
const Header = ({ isDarkMode, toggleTheme, activeSection }) => {
    
    // Estado interno para controlar a abertura/fechamento do menu mobile
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Dados dos links de navegação
    const links = [
        { href: "#home", text: "Home" },
        { href: "#sobre", text: "Sobre" },
        { href: "#habilidades", text: "Habilidades" },
        { href: "#projetos", text: "Projetos" },
        { href: "#contato", text: "Contato" }
    ];

    // Lógica para alternar o estado do menu (móvel)
    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };
    
    // Lógica para fechar o menu ao clicar em um link (mobile)
    const handleLinkClick = () => {
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    }
    
    return (
        <header id="navbar">
            <div className="logo">Aderson Junior</div>

            
            {/* Botão de Hambúrguer para Mobile */}
            <button 
                className="menu-toggle" 
                aria-label="Abrir Menu" 
                onClick={toggleMenu}
            >
                {/* O ícone muda de 'bars' para 'times' quando o menu está aberto */}
                <i className={`fas fa-${isMenuOpen ? 'times' : 'bars'}`}></i>
            </button>
            
            {/* Menu de Navegação - A classe 'open' é controlada pelo estado 'isMenuOpen' */}
            <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                {links.map((link, index) => (
                    <a 
                        key={index} 
                        href={link.href} 
                        onClick={handleLinkClick}
                        // LÓGICA DO SCROLL SPY: Adiciona a classe 'active' se o href for igual à seção ativa
                        className={activeSection === link.href ? 'active' : ''} 
                    >
                        {link.text}
                    </a>
                ))}
            </nav>
            
            {/* Overlay para fechar o menu ao clicar fora no mobile */}
            <div 
                className={`menu-overlay ${isMenuOpen ? 'open' : ''}`} 
                onClick={handleLinkClick}
            ></div>
        </header>
    );
};

export default Header;