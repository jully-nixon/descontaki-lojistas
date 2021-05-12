import React from 'react';
import './style.css';

const Coupon = ({ cpf, nome, nomeDoCupom, desconto }) => {
    return (
        <div className="coupon">
            <h4>CPF</h4>
            <label>{cpf}</label>
            <h4>Nome</h4>
            <label>{nome}</label>
            <h4>Nome do Cupom</h4>
            <label>{nomeDoCupom}</label>
            <h4>Desconto</h4>
            <label>{desconto}</label>
        </div>
    );
}

export default Coupon;