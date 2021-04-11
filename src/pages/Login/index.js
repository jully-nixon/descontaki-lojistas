import React from 'react';
import './style.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Image from '../../components/Image';


export default function Login() {
    return (
        <div className="login">
            <Image src={logo} alt="Logo" />

            <h1 className="login--title">Entrar</h1>
            <hr />

            <div className="login--content">
                <Input type="text" placeholder="Email" />
                <Input type="password" placeholder="Senha" />

                <Button title="Entrar" />

                <label className="login--forgotPassword">Esqueceu a senha?</label>
                <label className="login--register"><Link to="/register">Cadastre-se</Link></label>
            </div>

        </div>
    )
}