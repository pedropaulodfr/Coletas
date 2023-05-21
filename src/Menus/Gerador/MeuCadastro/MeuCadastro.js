import React from "react";
import { Link } from 'react-router-dom'
import './MeuCadastro.css'

const MeuCadastro = () => {
    return(
        <div className="MeuCadastro">
            <div className="Gerador-content">
                <div className="titulo-aba">
                    <h1>Meu Cadastro</h1>
                </div>
                <div className="conteudo-aba conteudo-meu-cadastro">
                    <>
                        <div className='cadastro-header'>
                            <h2>Gerador</h2>
                            <h2 className="data-atual"> </h2>
                        </div>

                        <div className='cadastro-cliente-content'>

                            <div className="dados-pessoais-content">
                                <div className="dados-pessoais-title">
                                    <h2>Dados Pessoais</h2>
                                </div>
                                
                                <div className="inputs">
                                    <input 
                                        type="text" 
                                        placeholder="CPF/CNPJ *" 
                                        value={''} 
                                    />
                                    <input 
                                        type="text" 
                                        placeholder="Nome/Razão Social *"
                                        className="input-nome-razao"
                                        value={''} 
                                    />
                                    <input 
                                        type="text" 
                                        placeholder="Telefone *"
                                        className="input-celular"
                                        maxLength="16"
                                        value={''} 
                                    />
                                    <input 
                                        type="text" 
                                        placeholder="Telefone (2)"
                                        className="input-celular"
                                        maxLength="16"
                                        value={''} 
                                    />
                                    <input 
                                        type="text" 
                                        placeholder="Celular"
                                        className="input-celular"
                                        maxLength="16"
                                        value={''} 
                                    />
                                    <input 
                                        type="text" 
                                        placeholder="Nome Contato"
                                        className="input-nome-contato"
                                        value={''} 
                                    />
                                    <input 
                                        type="email" 
                                        placeholder="E-mail *"
                                        className="input-email"
                                        value={''} 
                                    />
                                    <input 
                                        type="text" 
                                        placeholder="Número Cadastro"
                                        className="input-numero-cadastro"
                                        value={''} 
                                    />
                                    <input 
                                    type="date" 
                                    placeholder="Data Nascimento" 
                                    />
                                </div>
                            </div>

                            <div className="dados-endereco-content">
                                <div className="dados-endereco-title">
                                    <h2>Dados de Endereço</h2>
                                </div>
                                
                                <div className="inputs">
                                    <input 
                                        type="text" 
                                        placeholder="CEP *" 
                                        className="input-CEP"
                                        maxLength="9"
                                    />
                                    <input 
                                        type="text" 
                                        placeholder="Rua *" 
                                    />
                                    <input 
                                        type="text" 
                                        placeholder="Número *" 
                                    />
                                    <input 
                                        type="text" 
                                        placeholder="Bairro *" 
                                    />
                                    <input 
                                        type="text" 
                                        placeholder="Complemento" 
                                    />
                                    <input 
                                        type="text"
                                        placeholder="Cidade *"
                                    />
                                    <input 
                                        type="text" 
                                        placeholder="UF *"
                                        maxLength="2"
                                    />
                                </div>
                            </div>

                            <div className="permissoes-gerador">
                                <div className="permissoes-gerador-title">
                                    <h2>Permissões</h2>
                                </div>
                                <div className="inputs-permissoes-gerador">
                                    <input type="checkbox" id="tr-emitir-ctrs" value='1'></input>
                                    <label for="tr-emitir-ctrs">O Transportador pode emitir CTR's em seu nome?</label>
                                </div>
                                <div className="inputs-permissoes-gerador">
                                    <input type="checkbox" id="tr-editar-dados" value='1'></input>
                                    <label for="tr-editar-dados">O Transportador pode editar os seus dados?</label>
                                </div>

                            </div>

                            <div className="buttons">
                                <button className="salvar-btn" onClick={'handleSalvarCliente'}>Salvar Alterações</button>
                            </div>

                        </div>
                
                    </>
                </div>
            </div>
        </div>
    )
}

export default MeuCadastro;

