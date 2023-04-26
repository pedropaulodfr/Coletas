import React, { useState } from "react";
import './Gerador.css'
import Toolbar from "../../components/Toolbar/Toolbar";
import Navbar from "../../components/Navbar/Navbar";
import InicioModulo from "../../Menus/Gerador/InicioModulo/InicioModulo";
import CadastroPGRCC from "../../Menus/Gerador/CadastroPGRCC/CadastroPGRCC";


const Gerador = () => {

    const [menuSelecionado, setMenuSelecionado] = useState(0)

    return (
        <div className="Gerador">
            <Toolbar setMenuSelecionado={setMenuSelecionado} />
            <div className="Gerador-container">
                <Navbar />
                {menuSelecionado === 0 ? <InicioModulo /> : <></>}
                {menuSelecionado === 1 ? <CadastroPGRCC /> : <></>}
            </div>
        </div>
    )
}

export default Gerador