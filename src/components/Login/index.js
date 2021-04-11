import React from 'react';
import './style.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="login">
            <img className="login--logo" src={logo} alt="Logo" />
            <h1 className="login--title">Entrar</h1>
            <hr />

            <div className="login--content">
                <input type="text" placeholder="CNPJ" />
                <input type="password" placeholder="Senha" />

                <button className="login--button" disabled={true}>Entrar</button>

                <label className="login--forgotPassword">Esqueceu a senha?</label>
                <label className="login--register"><Link to="/register">Cadastre-se</Link></label>
            </div>

        </div>
    )
}