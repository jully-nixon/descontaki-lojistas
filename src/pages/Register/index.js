import React, { useState } from 'react';
import './style.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Image from '../../components/Image';

const initialFormState = {
    cnpj: '',
    razaoSocial: '',
    nomeFantasia: '',
    email: '',
    senha: '',
    confirmarSenha: ''
}

export default function Register() {
    let formData = [];

    const [form, setForm] = useState(initialFormState);

    const setInput = (newValue) => {
        setForm(form => ({ ...form, ...newValue }));
    }

    const submitForm = () => {
        if (localStorage.getItem('formData') != null) {
            formData = JSON.parse(localStorage.getItem('formData'));
        }
        formData.push(form);
        localStorage.setItem('formData', JSON.stringify(formData));
        document.getElementById("newRegister").reset();
    }

    return (
        <div className="register">
            <Link to="/login">
                <ArrowBackIosIcon className="register--toGoBack" />
            </Link>

            <Image src={logo}  alt="Logo"/>
            <h1 className="register--title">Novo Registro</h1>
            <hr />

            <div className="register--content">
                <form id="newRegister" method="POST">
                    <input
                        name="cnpj"
                        type="text"
                        placeholder="CNPJ"
                        onChange={e => setInput({ cnpj: e.target.value })}
                    />

                    <input
                        name="razãoSocial"
                        type="text"
                        placeholder="Razão Social"
                        onChange={e => setInput({ razaoSocial: e.target.value })}
                    />

                    <input
                        name="nomeFantasia"
                        type="text"
                        placeholder="Nome Fantasia"
                        onChange={e => setInput({ nomeFantasia: e.target.value })}
                    />

                    <input
                        name="email"
                        type="text"
                        placeholder="Email"
                        onChange={e => setInput({ email: e.target.value })}
                    />

                    <input
                        name="senha"
                        type="password"
                        placeholder="Senha"
                        onChange={e => setInput({ senha: e.target.value })}
                    />

                    <input
                        name="confirmarSenha"
                        type="password"
                        placeholder="Confirmar Senha"
                        onChange={e => setInput({ confirmarSenha: e.target.value })}
                    />
                </form>
            </div>

            <div className="register--button">
                <button onClick={submitForm} disabled={initialFormState}>Criar</button>
            </div>
        </div>
    )
}