import React, { useState } from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
    const [cnpj, setCnpj] = useState('');
    const [razaoSocial, setRazaoSocial] = useState('');
    const [nomeFantasia, setNomeFantasia] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    return (
        <AuthContext.Provider value={{
            cnpj, setCnpj,
            razaoSocial, setRazaoSocial,
            nomeFantasia, setNomeFantasia,
            email, setEmail,
            senha, setSenha,
            confirmarSenha, setConfirmarSenha
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}