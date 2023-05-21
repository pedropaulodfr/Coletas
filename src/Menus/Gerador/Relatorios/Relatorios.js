import React from "react";
import ListaRelatorios from "../../../components/ListaRelatorios/ListaRelatorios";
import './Relatorios.css'

const Relatorios = () => {
    return(
        <div className="Relatorios">
            <div className="Gerador-content">
                <div className="titulo-aba">
                    <h1>Relatórios</h1>
                </div>
                <div className="conteudo-aba conteudo-relatorios">
                    <ListaRelatorios />
                </div>
            </div>
        </div>
    )
}

export default Relatorios

