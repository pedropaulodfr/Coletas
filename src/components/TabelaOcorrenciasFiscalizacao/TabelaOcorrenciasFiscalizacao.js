import React from "react";
import './TabelaOcorrenciasFiscalizacao.css'

const TabelaOcorrenciasFiscalizacao = () => {
    return(
        <div className="tabela-ocorrencias-fiscalizacao">
            <table>
                <thead>
                    <tr>
                        <th>Número CTR</th>
                        <th>Solicitante</th>
                        <th>Endereço</th>
                        <th>Envio à Obra</th>
                        <th>Retirada da Obra</th>
                        <th>Fiscalização</th>
                        <th>Identificação da Caçamba</th>
                        <th>Tipo</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {pontoVendas.map(ponto => ( */}
                        <tr key={"ponto.id"}>
                            <td>
                                <a href="/" >{24686852}</a>
                            </td>
                            <td>{"A CSJ Testes"}</td>
                            <td>{"João Pedro da Luz, 0000"}</td>
                            <td>
                                <h1 className="data-text">{"20/01/2023"}</h1>
                                <h2 className="hour-text">{"14:12:24"}</h2>
                            </td>
                            <td>
                                <h1 className="data-text">{"20/01/2023"}</h1>
                                <h2 className="hour-text">{"18:12:24"}</h2>
                            </td>
                            <td>
                                <h1 className="data-text">{"24/01/2023"}</h1>
                                <h2 className="hour-text">{"04:00:49"}</h2>
                            </td>
                            <td>{"000020"}</td>
                            <td>{"ULTRAPASSOU O PRAZO (EM OBRA)"}</td>
                        </tr>
                     {/* ))} */}
                </tbody>
            </table>
        </div>
    )
}

export default TabelaOcorrenciasFiscalizacao;

