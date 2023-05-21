import React from "react";
import './OcorrenciasFiscalizacao.css'
import ListaOcorrenciasFiscalizacao from "../../../components/ListaOcorrenciasFiscalizacao/ListaOcorrenciasFiscalizacao";


const OcorrenciasFiscalizacao = () => {
    return(
        <div className="OcorrenciasFiscalizacao">
            <div className="Gerador-content">
                <div className="titulo-aba">
                    <h1>Ocorrências Fiscalização</h1>
                </div>
                <div className="conteudo-aba conteudo-ocorrencias-fiscalizacao">
                    <ListaOcorrenciasFiscalizacao />
                </div>
            </div>
        </div>
    )
}

export default OcorrenciasFiscalizacao;