import React, { useContext } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { FormValidations } from './formValidations';
import useValidation from './hooks/useValidation';
import { AuthContext } from '../../services/auth';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
    const authContext = useContext(AuthContext);

    const { errors, invalid } = useValidation(authContext, FormValidations);

    return (
        <>
            <form id="newRegister">
                <Input
                    name="cnpj"
                    type="text"
                    placeholder="CNPJ"
                    onChange={e => authContext.setCnpj(e.target.value)}
                    error={errors.cnpj}
                />
                <Input
                    name="razaoSocial"
                    type="text"
                    placeholder="Razão Social"
                    onChange={e => authContext.setRazaoSocial(e.target.value)}
                    error={errors.razaoSocial}
                />

                <Input
                    name="nomeFantasia"
                    type="text"
                    placeholder="Nome Fantasia"
                    onChange={e => authContext.setNomeFantasia(e.target.value)}
                    error={errors.nomeFantasia}
                />

                <Input
                    name="email"
                    type="text"
                    placeholder="Email"
                    onChange={e => authContext.setEmail(e.target.value)}
                    error={errors.email}
                />

                <Input
                    name="senha"
                    type="password"
                    placeholder="Senha"
                    onChange={e => authContext.setSenha(e.target.value)}
                    error={errors.senha}
                />

                <Input
                    name="confirmarSenha"
                    type="password"
                    placeholder="Confirmar Senha"
                    onChange={e => authContext.setConfirmarSenha(e.target.value)}
                    error={errors.confirmarSenha}
                />


                <div className="register--button">
                    <Link to="/">
                        <Button disabled={invalid} title="Criar" />
                    </Link>
                </div>
            </form>
        </>
    );
}
export default RegisterForm;