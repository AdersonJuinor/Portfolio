import React from 'react';

const Contact = () => {
    return (
        <section id="contato" className="contact-section section">
            <div className="contact-hero"> 
                <h2 className="section-title animate-on-scroll" data-animation="slide-in-left" data-delay="0s">Entre em Contato</h2>
                <p className="contact-slogan animate-on-scroll" data-animation="fade-in-up" data-delay="0.2s">Estou disponível para novos projetos e colaborações. Envie-me uma mensagem!</p>

                <div className="form-container animate-on-scroll" data-animation="fade-in-up" data-delay="0.4s">
                    {/* Lembre-se de substituir 'SEU_EMAIL_AQUI' pelo seu endpoint real (ex: Formsubmit.co) */}
                    <form action="https://formsubmit.co/adersonjunior241@gmail.com" method="POST" className="contact-form">
                        
                        <div className="form-group">
                            <input type="text" name="name" placeholder="Seu Nome Completo" required />
                        </div>
                        
                        <div className="form-group">
                            <input type="email" name="email" placeholder="Seu Melhor E-mail" required />
                        </div>
                        
                        <div className="form-group">
                            <input type="text" name="subject" placeholder="Assunto da Mensagem" required />
                        </div>

                        <div className="form-group">
                            <textarea name="message" rows="5" placeholder="Sua Mensagem" required></textarea>
                        </div>
                        
                        <button type="submit" className="btn primary full-width">Enviar Mensagem</button>

                        <input type="hidden" name="_captcha" value="false" />
                    </form>
                </div>
                
                <div className="separator animate-on-scroll" data-animation="fade-in" data-delay="0.6s">Ou Conecte-se:</div> 
            </div>

            <div className="contact-grid animate-on-scroll" data-animation="fade-in-up" data-delay="0.8s">
                
                <a href="https://www.linkedin.com/in/aderson-junior-009387346" className="contact-card" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin fa-3x"></i>
                    <h3>LinkedIn</h3>
                    <p>Conexão profissional</p>
                    <span>Ver Perfil</span>
                </a>

                <a href="https://github.com/AdersonJuinor" className="contact-card" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github fa-3x"></i>
                    <h3>GitHub</h3>
                    <p>Veja meus códigos e projetos</p>
                    <span>Ver Repositórios</span>
                </a>

                <a href="https://api.whatsapp.com/send?phone=5548988417748" className="contact-card" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-whatsapp fa-3x"></i>
                    <h3>WhatsApp</h3>
                    <p>Converse diretamente comigo</p>
                    <span>Iniciar Conversa</span>
                </a>
                
            </div>
        </section>
    );
};

export default Contact;