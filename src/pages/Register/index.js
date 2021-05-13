import React, { useEffect } from 'react';
import './style.css';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Image from '../../components/Image';
import Form from '../../components/RegisterForm';

const Register = () => {
    useEffect(() => {
        document.body.style.backgroundColor = 'rgb(54, 53, 53)'
    }, []);

    return (
        <div className="register">
            <Link to="/">
                <ArrowBackIosIcon className="register--toGoBack" />
            </Link>

            <Image src={logo} alt="Logo" width="150px" heigth="150px" />
            <h1 className="register--title">Novo Registro</h1>
            <hr />

            <div className="register--content">
                <Form />
            </div>
        </div>
    )
}
export default Register;