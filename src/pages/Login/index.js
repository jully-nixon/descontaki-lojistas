import React, { useEffect } from 'react';
import './style.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Image from '../../components/Image';

export default function Login() {
    useEffect(() => {
        document.body.style.backgroundColor = 'rgb(54, 53, 53)'
    }, []);

    return (
        <div className="login">
            <Image src={logo} alt="Logo" width="150px" heigth="150px" />

            <h1 className="login--title">Entrar</h1>
            <hr />

            <div className="login--content">
                <Input type="text" placeholder="Email" />
                <Input type="password" placeholder="Senha" />

                <Link to="/home"><Button title="Entrar" /></Link>

                <label className="login--forgotPassword">Esqueceu a senha?</label>
                <label className="login--register"><Link to="/register">Cadastre-se</Link></label>
            </div>

        </div>
    )
}