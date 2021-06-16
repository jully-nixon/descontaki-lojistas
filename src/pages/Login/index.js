import React, { useEffect, useState, useContext } from 'react';
import './style.css';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Image from '../../components/Image';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../services/auth';


const initialFormLoginState = {
    email: '',
    password: '',
}

toast.configure();
const Login = ({ history }) => {
    const authContext = useContext(AuthContext);

    const [formLogin, setFormLogin] = useState(initialFormLoginState);

    useEffect(() => {
        document.body.style.backgroundColor = 'rgb(54, 53, 53)'
    }, []);

    const setInput = (newValue) => {
        setFormLogin(formLogin => ({ ...formLogin, ...newValue }));
    }

    const submitLogin = () => {
        let userRecord = authContext;
        localStorage.setItem('loggedInUser', formLogin.email)

        if (!userRecord && formLogin.email && formLogin.password) {
            toast.error('Usuário não cadastrado.', {
                position: "top-right",
                autoClose: 3000,
            });
        }

        else if (userRecord && formLogin.email && formLogin.password) {
            let checkLogin = '';
            if (userRecord.email === formLogin.email) {
                checkLogin = userRecord.email;
            }
            if (checkLogin !== "") {
                history.push('home');
            } else {
                toast.error('Usuário ou senha incorreto!', {
                    position: "top-right",
                    autoClose: 3000,
                });
            }
        } else {
            toast.error('Campos usuário e senha obrigatórios.', {
                position: "top-right",
                autoClose: 3000,
            });
        }
    }

    return (
        <div className="login">
            <Image src={logo} alt="Logo" width="150px" heigth="150px" />

            <h1 className="login--title">Entrar</h1>
            <hr />

            <div className="login--content">
                <Input type="text"
                    placeholder="Email"
                    onChange={e => setInput({ email: e.target.value })}
                />
                <Input type="password"
                    placeholder="Senha"
                    onChange={e => setInput({ password: e.target.value })}
                />
                <Button title="Entrar" handlerButton={submitLogin} width="270px" />

                <Link to="/home"></Link>

                <label className="login--forgotPassword">Esqueceu a senha?</label>
                <label className="login--register"><Link to="/register">Cadastre-se</Link></label>
            </div>

        </div>
    )
}
export default Login;