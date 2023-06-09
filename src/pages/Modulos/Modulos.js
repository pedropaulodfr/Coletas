import React from "react";
import "./Modulos.css"
import Navbar from "../../components/Navbar/Navbar";
import { Link } from 'react-router-dom'


function Modulos() {
    return (
        <div className="modulos">
            <Navbar />
            <div className="modulos-container">
                <div className="modulos-header">
                    <h1>Módulos de Acesso</h1>
                </div>
                <div className="modulos-content">
                    <Link to="/gerador" className="blocos-modulos">
                        <h1>Gerador</h1>
                    </Link>
                    <div className="blocos-modulos">
                        <h1>Transportador</h1>
                    </div>
                    <div className="blocos-modulos">
                        <h1>Destino Final</h1>
                    </div>
                    <div className="blocos-modulos">
                        <h1>Fiscalização</h1>
                    </div>
                    <div className="blocos-modulos">
                        <h1>Secretaria</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modulos;