import React, { useEffect, useState } from "react";
import './TabelaPGRCC.css'
import ModalConfirmacao from '../ModalConfirmacao/ModalConfirmacao';
import ModalEdicao from "../ModalEdicao/ModalEdicao";
import Alertas from "../Alertas/Alertas";

const TabelaPGRCC = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [showModalEdicao, setShowModalEdicao] = useState(false);
    const [showModalMapa, setShowModalMapa] = useState(false);
    const [pontoVendas, setPontoVendas] = useState([]);
    const [pontoVendasPesquisa, setPontoVendasPesquisa] = useState([]);
    const [pontoVendaSelecionadoId, setPontoVendaSelecionadoId] = useState(null);
    const [exclusaoSucesso, setExclusaoSucesso] = useState(false);
    const [edicaoSucesso, setEdicaoSucesso] = useState(false)
    const [longitude, setLongitude] = useState("")
    const [latitude, setLatitude] = useState("")


    useEffect(() => {
        const handlePesquisaPGRCC = () => {
            let resultadoPesquisa = pontoVendas.filter(pontoVenda => pontoVenda.descricao.toLowerCase().startsWith(props.pesquisa.toLowerCase()));
            setPontoVendas(resultadoPesquisa)

            if (props.pesquisa == "") {
                setPontoVendas(pontoVendasPesquisa)
            }
        }
    
        if (props.statusPesquisa) {
            handlePesquisaPGRCC();
        }
    }, [props.pesquisa])

    useEffect(() => {
        if (exclusaoSucesso || edicaoSucesso) {
          const timer = setTimeout(() => {
            setExclusaoSucesso(false);
            setEdicaoSucesso(false);
          }, 5000);
    
          return () => clearTimeout(timer);
        }
      }, [exclusaoSucesso, edicaoSucesso]);

    const handleExcluirPGRCC = (pontoVendaId) => {
        
    }

    return (
        <div className="tabela-pgrcc">
            {showModalEdicao && (
                <ModalEdicao 
                    statusModal={setShowModalEdicao} 
                    pgrccId={pontoVendaSelecionadoId} 
                    listaPGRCC={setPontoVendas}
                    setStatus={setEdicaoSucesso}
                    latitude={latitude}
                    longitude={longitude}
                />
            )}
            {exclusaoSucesso && (
                <Alertas 
                    mensagem="PGRCC removido com sucesso!" 
                    corMensagem="#ffffff" corFundo="#219653" 
                    corBarraProgresso="white" 
                    setStatus={setExclusaoSucesso}
                />
            )}
            {edicaoSucesso && (
                <Alertas 
                    mensagem="PGRCC atualizado com sucesso!" 
                    corMensagem="#ffffff" corFundo="#219653" 
                    corBarraProgresso="white" 
                    setStatus={setEdicaoSucesso}
                />
            )}
            <table>
                <thead>
                    <tr>
                    <th>Número PGRCC</th>
                    <th>Descrição da Obra</th>
                    <th>Status da Análise Prévia</th>
                    <th>Encerramento da Obra/PGRCC</th>
                    <th>Ações</th>
                    <th>Data Encerramento</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {pontoVendas.map(ponto => ( */}
                        <tr key={"ponto.id"}>
                            <td>{"00000698"}</td>
                            <td>{"Teste1"}</td>
                            <td>
                                <h2 className="status">{"Autorizado"}</h2>
                            </td>
                            <td>
                                <button 
                                    className="excluir-btn" 
                                    onClick={() => {
                                        setPontoVendaSelecionadoId("ponto.id");
                                        setShowModal(true)
                                    }}
                                >
                                    Encerrar
                                </button>
                            </td>
                            <td>
                                <button 
                                    className="mapa-btn"
                                    onClick={() => {
                                        setPontoVendaSelecionadoId("ponto.id");
                                        setShowModalMapa(true);
                                    }}
                                >
                                    Impressão
                                </button>
                                <button 
                                    className="editar-btn"
                                    onClick={() => {
                                        setPontoVendaSelecionadoId("ponto.id");
                                        setShowModalEdicao(true)
                                    }}
                                >
                                    Editar
                                </button>
                                <button 
                                    className="excluir-btn" 
                                    onClick={() => {
                                        setPontoVendaSelecionadoId("ponto.id");
                                        setShowModal(true)
                                    }}
                                >
                                    Excluir
                                </button>
                                {showModal && pontoVendaSelecionadoId === "ponto.id" && (
                                    <ModalConfirmacao 
                                        message="Tem certeza que deseja excluir?" 
                                        onConfirm={() => {
                                            handleExcluirPGRCC(pontoVendaSelecionadoId);
                                            setPontoVendaSelecionadoId(null);
                                            setShowModal(false);
                                            setExclusaoSucesso(true);
                                        }} 
                                        onCancel={() => {
                                            setPontoVendaSelecionadoId(null);
                                            setShowModal(false)
                                        }}
                                    />
                                )}
                            </td>
                            <td>11/01/2024</td>
                        </tr>
                     {/* ))} */}
                </tbody>
            </table>
        </div>
    )
}

export default TabelaPGRCC