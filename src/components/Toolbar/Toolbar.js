import React, { useState } from "react";
import './Toolbar.css'
import logoPrefeitura from "../../assets/logoPrefeitura.png"
import { CgClose } from "react-icons/cg";



const Toolbar = (props) => {
    const [itemSelecionado, setItemSelecionado] = useState(0)

    const handleClickItem = (index) => {
        setItemSelecionado(index)
        props.setMenuSelecionado(index)
    }

    return (
        <div className="Toolbar">
            <div className="Toolbar-container">
                <div className="Toolbar-logo">
                    <img src={logoPrefeitura} alt="logo" />
                </div>
                <div className='button-close-toolbar'>
                    <CgClose onClick={() => {}} />
                </div>
                
                <div className="menus">
                    <div 
                        className={itemSelecionado === 0 ? "item selected" : "item"}
                        onClick={() => {handleClickItem(0)}}
                    >
                        <h1>Inicio Módulo</h1>
                    </div>
                    <div 
                        className={itemSelecionado === 1 ? "item selected" : "item"}
                        onClick={() => {handleClickItem(1)}}
                    >
                        <h1>Cadastro PGRCC</h1>
                    </div>
                    <div 
                        className={itemSelecionado === 2 ? "item selected" : "item"}
                        onClick={() => {handleClickItem(2)}}
                    >
                        <h1>Portaria</h1>
                    </div>
                    <div 
                        className={itemSelecionado === 3 ? "item selected" : "item"}
                        onClick={() => {handleClickItem(3)}}
                    >
                        <h1>Relatórios</h1>
                    </div>
                    <div 
                        className={itemSelecionado === 4 ? "item selected" : "item"}
                        onClick={() => {handleClickItem(4)}}
                    >
                        <h1>Ocorrências Fiscalização</h1>
                    </div>
                    <div 
                        className={itemSelecionado === 5 ? "item selected" : "item"}
                        onClick={() => {handleClickItem(5)}}
                    >
                        <h1>Meu Cadastro</h1>
                    </div>
                    <div 
                        className={itemSelecionado === 6 ? "item selected" : "item"}
                        onClick={() => {handleClickItem(6)}}
                    >
                        <h1>Cadastro de Usuários</h1>
                    </div>
                    <div 
                        className={itemSelecionado === 7 ? "item selected" : "item"}
                        onClick={() => {handleClickItem(7)}}
                    >
                        <h1>Responsável Técnico</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Toolbar;