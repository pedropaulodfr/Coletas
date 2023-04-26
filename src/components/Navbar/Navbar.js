import React from "react";
import './Navbar.css'
import logoBrancaColetas from "../../assets/logo-white-coletas.png"

function Navbar() {
    return(
        <div className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src={logoBrancaColetas} alt="logo" />
                </div>
                <div className="navbar-links">
                    <a href="/">Legislação</a>
                    <h3>|</h3>
                    <a href="/">Transportadores Credenciados</a>    
                    <h3>|</h3>
                    <a href="/">Destinos Credenciados</a>    
                    <h3>|</h3>
                    <a href="/">Documentação</a>
                    <h3>|</h3>
                    <a href="/">PEV</a>    
                </div>
            </div>
        </div>
    )
}

export default Navbar;