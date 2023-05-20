import React from "react";
import './Portaria.css'

const Portaria = () => {
    return (
        <div className="Portaria">
            <div className="Gerador-content">
                <div className="titulo-aba">
                    <h1>Portaria</h1>
                </div>
                <div className="conteudo-aba">
                    <div className="blocos">
                        <h3>Confirmar Entrada</h3>
                        <h2>1</h2>
                    </div>
                    <div className="blocos">
                        <h3>Confirmar Saída</h3>
                        <h2>11</h2>
                    </div>
                    <div className="blocos">
                        <h3>Solicitações Pendentes</h3>
                        <h2>2</h2>
                    </div>
                    <div className="blocos">
                        <h3>Requisição de Entrada</h3>
                        <h2>0</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portaria;