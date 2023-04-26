import React from "react";
import { useState, useEffect } from 'react';
import { Route, Redirect, useNavigate } from 'react-router-dom';
import "./Login.css";
import Navbar from "../../components/Navbar/Navbar";
import logoPrefeitura from "../../assets/logoPrefeitura.png";
import Footer from "../../components/Footer/Footer";
import Cookies from 'js-cookie';
import { nanoid } from 'nanoid'

function Login(props) {
    const navigate = useNavigate();

    const handleLogin = () => {
        Cookies.set('token', nanoid()); 
        navigate('/modulos')
      };

    return (
        <div className="login">
            <Navbar /> 
            <div className="login-container">  
                <div className="login-logo-prefeitura">
                    <img src={logoPrefeitura} alt="logo" />
                </div>
                <div className="login-container">
                    <div className="login-texto">
                        <h1>Para continuar realize o login com a sua conta</h1>
                    </div>
                    <div className="login-form">
                        <div className='login-title'>
                            <h1>Login</h1>
                        </div>
                        <div className='inputs-login'>
                            <input 
                                type="text"  
                                placeholder='Login *'
                            />
                        </div>
                        <div className='inputs-login'>
                            <input 
                                type="password"  
                                placeholder='Senha *'
                            />
                        </div>
                        <button className='form-btn' onClick={handleLogin} >Entrar</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login;