import React, { useState } from "react";
import './ListaPGRCC.css'
import { Link } from 'react-router-dom'
import TabelaPGRCC from "../TabelaPGRCC/TabelaPGRCC";


const ListaPGRCC = () => {

    const [pesquisa, setPesquisa] = useState("")
    const [statusPesquisa, setStatusPesquisa] = useState()

    return (
        <div className="lista-pgrcc-container">
            <div className='lista-header'>
                <h2>Lista de PGRCC</h2>
                <Link to="/cadastro">
                    <button className='cadastrar-novo-btn'>Cadastrar Novo</button>
                </Link>
            </div>

             <div className='lista-pgrcc-content'>
                <div className='lista-body'>
                    <div className='lista-top'>
                        <h2 className="pgrcc-title">Projetos</h2>
                        <input 
                            type="text" 
                            placeholder="Pesquisar"
                            onChange={(e) => {setPesquisa(e.target.value); setStatusPesquisa(true)}}
                        />
                    </div>
                </div>

                <TabelaPGRCC pesquisa={pesquisa} statusPesquisa={statusPesquisa}/>
            </div>


        </div>
    )
}

export default ListaPGRCC;