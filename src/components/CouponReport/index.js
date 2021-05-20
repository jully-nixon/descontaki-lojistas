import React from 'react';
import './style.css';

const CouponReport = ({ name, discount, active }) => {
    return (
        <div className="coupon--report">
                <label id="title">{name}</label>
                <label id="active">Cupons Ativos: <strong>{active}</strong></label>
                <br />
            <label id="discount">Desconto: {discount}</label>
        </div>
    );
}

export default CouponReport;