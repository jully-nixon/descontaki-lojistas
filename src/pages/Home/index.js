import React, { useEffect } from 'react';
import './style.css';
import Header from '../../components/Header';
import Image from '../../components/Image';
import cupons from '../../assets/images/imgCupons.png';
import reports from '../../assets/images/reports.png';
import { Link } from 'react-router-dom';

const Home = () => {
    useEffect(() => {
        document.body.style.backgroundColor = '#dad8d8'
    }, []);

    return (
        <div className="home">
            <Header />
            <div className="home--content">
                <h1 className="home--title">Seja Bem-Vindo(a)!</h1>
                <hr />
                <div className="home--options">
                    <Link to="/reports">
                        <div className="home--reports">
                            <Image src={reports} alt="cupons" width="100px" heigth="100px" />
                            <hr />
                            <strong>Relatórios</strong>
                        </div>
                    </Link>
                    <Link to="/check-coupons">
                        <div className="home--coupons">
                            <Image src={cupons} alt="cupons" width="100px" heigth="100px" />
                            <hr />
                            <strong>Validar Cupons</strong>
                        </div>
                    </Link>
                </div>
                <hr />
            </div>

        </div>

    );
}
export default Home;