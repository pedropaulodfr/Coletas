import React, { useState } from "react";
import './ListaOcorrenciasFiscalizacao.css'
import { Link } from 'react-router-dom'
import TabelaOcorrenciasFiscalizacao from "../TabelaOcorrenciasFiscalizacao/TabelaOcorrenciasFiscalizacao";


const ListaOcorrenciasFiscalizacao = () => {

    const [pesquisa, setPesquisa] = useState("")
    const [statusPesquisa, setStatusPesquisa] = useState()

    return (
        <div className="lista-ocorrencias-fiscalizacao-container">
            <div className='lista-header'>
            </div>

            <div className='lista-ocorrencias-fiscalizacao-content'>
                <div className='lista-body'>
                    <div className='lista-top'>
                        <h2 className="ocorrencias-fiscalizacao-title">CTRs</h2>
                        <input 
                            type="text" 
                            placeholder="Pesquisar"
                            onChange={(e) => {setPesquisa(e.target.value); setStatusPesquisa(true)}}
                        />
                    </div>
                </div>

                <TabelaOcorrenciasFiscalizacao pesquisa={pesquisa} statusPesquisa={statusPesquisa}/>
            </div>


        </div>
    )
}

export default ListaOcorrenciasFiscalizacao;