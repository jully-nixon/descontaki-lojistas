import React, { useEffect, useState } from 'react';
import Coupon from '../../components/Coupon';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Input from '../../components/Input';
import './style.css';
import SearchIcon from '@material-ui/icons/Search';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const initialFormCouponState = {
    code: '',
    cpf: '',
}

const CheckCoupons = () => {
    useEffect(() => {
        document.body.style.backgroundColor = '#dad8d8'
    }, []);

    const [coupon, setCoupon] = useState({});
    const [showCoupon, setShowCoupon] = useState(false);
    const [formCoupon, setFormCoupon] = useState(initialFormCouponState);

    const getCodeAndCPFCoupon = (newValue) => {
        setFormCoupon(formCoupon => ({ ...formCoupon, ...newValue }));
    }

    const getCoupons = () => {
        if (formCoupon.code === '0000' && formCoupon.cpf === '87845678456') {
            setCoupon({
                cpf: '87845678456',
                nome: 'Larissa Renata Lins',
                nomeDoCupom: 'Dia das Mães',
                desconto: '50%'
            });
            setShowCoupon(true);
        } else if (formCoupon.code !== '' && formCoupon.cpf === '') {
            toast.error('Campo CPF obrigatório', {
                position: "top-right",
                autoClose: 3000,
            });
        } else if (formCoupon.code === '' && formCoupon.cpf !== '') {
            toast.error('Campo code obrigatório', {
                position: "top-right",
                autoClose: 3000,
            });
        } else {
            setShowCoupon(false);
            toast.error('Cupom não encontrado', {
                position: "top-right",
                autoClose: 3000,
            });
        }
    }

    const useCoupon = () => {
        setCoupon({});
        toast.success('Cupom aplicado com sucesso!', {
            position: "top-right",
            autoClose: 3000,
        });
        setShowCoupon(false);
        setFormCoupon({});
    }

    return (
        <div className="checkCoupons">
            <Header />
            <div className="coupons--content">
                <h1 className="checkCoupons--title">Verificar Cupom</h1>
                <hr />
                <label className="coupons--code">Código do cupom: <Input id="code" type="text"
                    onChange={e => getCodeAndCPFCoupon({ code: e.target.value })} /></label>
                <br />
                <label className="coupons--code">CPF: <Input id="code" type="text"
                    onChange={e => getCodeAndCPFCoupon({ cpf: e.target.value })} /></label>
                <SearchIcon className="coupons--search" onClick={getCoupons} />
                <div className="coupons--result">
                    {showCoupon &&
                        <Coupon cpf={coupon.cpf} nome={coupon.nome}
                            nomeDoCupom={coupon.nomeDoCupom} desconto={coupon.desconto} />
                    }
                </div>

            </div>
            <div className="ckeckCoupons--button">
                <Button title="Usar" disabled={!showCoupon} onClick={useCoupon} />
            </div>
        </div>
    );
}

export default CheckCoupons;