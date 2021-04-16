import React, { useState } from 'react';
import './style.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Image from '../../components/Image';
import Input from '../../components/Input';
import Button from '../../components/Button';

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

            <Image src={logo} alt="Logo" />
            <h1 className="register--title">Novo Registro</h1>
            <hr />

            <div className="register--content">
                <form id="newRegister" method="POST">
                    <Input
                        name="cnpj"
                        type="text"
                        placeholder="CNPJ"
                        handlerInput={e => setInput({ cnpj: e.target.value })}
                    />

                    <Input
                        name="razãoSocial"
                        type="text"
                        placeholder="Razão Social"
                        handlerInput={e => setInput({ razaoSocial: e.target.value })}
                    />

                    <Input
                        name="nomeFantasia"
                        type="text"
                        placeholder="Nome Fantasia"
                        handlerInput={e => setInput({ nomeFantasia: e.target.value })}
                    />

                    <Input
                        name="email"
                        type="text"
                        placeholder="Email"
                        handlerInput={e => setInput({ email: e.target.value })}
                    />

                    <Input
                        name="senha"
                        type="password"
                        placeholder="Senha"
                        handlerInput={e => setInput({ senha: e.target.value })}
                    />

                    <Input
                        name="confirmarSenha"
                        type="password"
                        placeholder="Confirmar Senha"
                        handlerInput={e => setInput({ confirmarSenha: e.target.value })}
                    />
                </form>
            </div>

            <div className="register--button">
                <Button handlerButton={submitForm} disabled={initialFormState} title="Criar" />
            </div>
        </div>
    )
}