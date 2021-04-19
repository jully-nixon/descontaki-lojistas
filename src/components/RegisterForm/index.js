import React, { useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { FormValidations } from './formValidations';
import useValidation from './hooks/useValidation';

const initialFormState = {
    cnpj: '',
    razaoSocial: '',
    nomeFantasia: '',
    email: '',
    password: '',
    confirmPassword: ''
}

export default function RegisterForm() {
    let formData = [];

    const [form, setForm] = useState(initialFormState);
    const { errors, invalid } = useValidation(form, FormValidations);

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
        <>
            <form id="newRegister">
                <Input
                    name="cnpj"
                    type="text"
                    placeholder="CNPJ"
                    onChange={e => setInput({ cnpj: e.target.value })}
                    error={errors.cnpj}
                />
                <Input
                    name="razaoSocial"
                    type="text"
                    placeholder="Razão Social"
                    onChange={e => setInput({ razaoSocial: e.target.value })}
                    error={errors.razaoSocial}
                />

                <Input
                    name="nomeFantasia"
                    type="text"
                    placeholder="Nome Fantasia"
                    onChange={e => setInput({ nomeFantasia: e.target.value })}
                    error={errors.nomeFantasia}
                />

                <Input
                    name="email"
                    type="text"
                    placeholder="Email"
                    onChange={e => setInput({ email: e.target.value })}
                    error={errors.email}
                />

                <Input
                    name="senha"
                    type="password"
                    placeholder="Senha"
                    onChange={e => setInput({ password: e.target.value })}
                    error={errors.password}
                />

                <Input
                    name="confirmarSenha"
                    type="password"
                    placeholder="Confirmar Senha"
                    onChange={e => setInput({ confirmPassword: e.target.value })}
                    error={errors.confirmPassword}
                />


                <div className="register--button">
                    <Button handlerButton={submitForm} disabled={invalid} title="Criar" />
                </div>
            </form>
        </>
    );
}