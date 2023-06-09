import React from "react";
import './InicioModulo.css'

const InicioModulo = () => {
    return (
        <div className="Gerador-content">
            <div className="titulo-aba">
                <h1>Indicadores CTR</h1>
            </div>
            <div className="conteudo-aba">
                <div className="blocos">
                    <h3>Pendentes de Envio</h3>
                    <h2>2</h2>
                </div>
                <div className="blocos">
                    <h3>Pendentes de Recebimento</h3>
                    <h2>0</h2>
                </div>
                <div className="blocos">
                    <h3>Em Obra</h3>
                    <h2>7</h2>
                </div>
                <div className="blocos">
                    <h3>Em Trânsito</h3>
                    <h2>1</h2>
                </div>
                <div className="blocos">
                    <h3>Baixadas</h3>
                    <h2>34</h2>
                </div>
                <div className="blocos" style={{backgroundColor: '#973838'}}>
                    <h3>Recusadas no Destino Final</h3>
                    <h2>2</h2>
                </div>
            </div>
        </div>
    )
}

export default InicioModulo;