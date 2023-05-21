import React, { useState } from "react";
import './Gerador.css'
import Toolbar from "../../components/Toolbar/Toolbar";
import Navbar from "../../components/Navbar/Navbar";
import InicioModulo from "../../Menus/Gerador/InicioModulo/InicioModulo";
import CadastroPGRCC from "../../Menus/Gerador/CadastroPGRCC/CadastroPGRCC";
import Portaria from "../../Menus/Gerador/Portaria/Portaria";
import Relatorios from "../../Menus/Gerador/Relatorios/Relatorios";
import OcorrenciasFiscalizacao from "../../Menus/Gerador/OcorrenciasFiscalizacao/OcorrenciasFiscalizacao";
import MeuCadastro from "../../Menus/Gerador/MeuCadastro/MeuCadastro";


const Gerador = () => {

    const [menuSelecionado, setMenuSelecionado] = useState(0)

    return (
        <div className="Gerador">
            <Toolbar setMenuSelecionado={setMenuSelecionado} />
            <div className="Gerador-container">
                <Navbar />
                {menuSelecionado === 0 ? <InicioModulo /> : <></>}
                {menuSelecionado === 1 ? <CadastroPGRCC /> : <></>}
                {menuSelecionado === 2 ? <Portaria /> : <></>}
                {menuSelecionado === 3 ? <Relatorios /> : <></>}
                {menuSelecionado === 4 ? <OcorrenciasFiscalizacao /> : <></>}
                {menuSelecionado === 5 ? <MeuCadastro /> : <></>}
            </div>
        </div>
    )
}

export default Gerador