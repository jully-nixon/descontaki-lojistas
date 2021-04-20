import React, { useEffect } from 'react';
import './style.css';
import Menu from '../../components/Menu';
import Image from '../../components/Image';
import cupons from '../../assets/images/imgCupons.png';
import reports from '../../assets/images/reports.png';

export default function Home() {
    useEffect(() => {
        document.body.style.backgroundColor = '#dad8d8'
    }, []);

    return (
        <div className="home">
            <Menu />
            <div className="home--content">
                <h1 className="home--title">Seja Bem-Vindo(a)!</h1>
                <hr />
                <div className="home--options">
                    <div className="home--reports">
                        <Image src={reports} alt="cupons" width="100px" heigth="100px" />
                        <hr />
                        <strong>Relatórios</strong>
                    </div>
                    <div className="home--coupons">
                        <Image src={cupons} alt="cupons" width="100px" heigth="100px" />
                        <hr />
                        <strong>Validar Cupons</strong>
                    </div>
                </div>
                <hr />
            </div>

        </div>

    );
}