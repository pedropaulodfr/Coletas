import React from "react";
import './TabelaRelatorios.css'

const TabelaRelatorios = () => {
    return(
        <div className="tabela-relatorios">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <button 
                                className="mapa-btn"
                                onClick={() => {
                                }}
                            >
                                Abrir
                            </button>
                        </td>
                        <td>
                            <h1 className="relatorio-nome">CTRs Registradas</h1>
                            <h2 className="relatorio-descricao">Lista as CTR's emitidas por transportador</h2>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button 
                                className="mapa-btn"
                                onClick={() => {
                                }}
                            >
                                Abrir
                            </button>
                        </td>
                        <td>
                            <h1 className="relatorio-nome">Certificado de Destinação</h1>
                            <h2 className="relatorio-descricao">Visualização de CTR's Destinadas por Endereço de Obra</h2>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TabelaRelatorios