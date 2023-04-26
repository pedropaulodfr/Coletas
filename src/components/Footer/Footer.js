import React from "react";
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="texto-atendimento">
                    <h1>Horário de atendimento - Suporte Online</h1>
                    <h2>Segunda à Sexta: 08:00 às 18:00</h2>
                    <h2>Sábados: 09:00 às 15:00</h2>
                </div>
                <div className="texto-contatos">
                    <h1>Contatos</h1>
                    <h2>Telefones: (12) 3042-1125 | (12) 3600-2393</h2>
                    <h2>E-mail: suporte@csjsistemas.com.br</h2>
                </div>
            </div>
        </div>
    )
}

export default Footer;