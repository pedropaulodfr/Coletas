import React from "react";
import './CadastroPGRCC.css'
import ListaPGRCC from "../../../components/ListaPGRCC/ListaPGRCC";

const CadastroPGRCC = () => {
    return (
        <div className="CadastroPGRCC">
            <div className="Gerador-content">
                <div className="titulo-aba">
                    <h1>PGRCC</h1>
                </div>
                <div className="conteudo-aba conteudo-pgrcc">
                    <ListaPGRCC />
                </div>
            </div>
        </div>
    )
}

export default CadastroPGRCC;