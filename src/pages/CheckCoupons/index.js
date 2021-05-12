import React, { useEffect } from 'react';
import Coupon from '../../components/Coupon';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Input from '../../components/Input';
import './style.css';
import SearchIcon from '@material-ui/icons/Search';

const CheckCoupons = () => {
    useEffect(() => {
        document.body.style.backgroundColor = '#dad8d8'
    }, []);
    return (
        <div className="checkCoupons">
            <Header />
            <div className="coupons--content">
                <h1 className="checkCoupons--title">Verificar Cupom</h1>
                <hr />
                <label className="coupons--code">Código do cupom: <Input type="text" />
                    <SearchIcon className="coupons--search" /></label>
                <div className="coupons--result">
                    <Coupon cpf="87845678456" nome="Larissa Renata Lins"
                        nomeDoCupom="Dia das Mães" desconto="50%" />
                </div>

            </div>
            <div className="ckeckCoupons--button">
                <Button title="Usar" />
            </div>
        </div>
    );
}

export default CheckCoupons;