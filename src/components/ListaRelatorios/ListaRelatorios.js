import React, {useState} from "react";
import './ListaRelatorios.css'
import TabelaRelatorios from "../TabelaRelatorios/TabelaRelatorios";

const ListaRelatorios = () => {

    const [pesquisa, setPesquisa] = useState("")
    const [statusPesquisa, setStatusPesquisa] = useState()

    return(
        <div className="lista-relatorios-container">
            <div className='lista-relatorios-content'>
                <div className='lista-body'>
                    <div className='lista-top'>
                        <h2 className="relatorio-title">Relatórios do Gerador</h2>
                        <input 
                            type="text" 
                            placeholder="Pesquisar"
                            onChange={(e) => {setPesquisa(e.target.value); setStatusPesquisa(true)}}
                        />
                    </div>
                </div>

                <TabelaRelatorios pesquisa={pesquisa} statusPesquisa={statusPesquisa}/>
            </div>
        </div>
    )
}

export default ListaRelatorios;