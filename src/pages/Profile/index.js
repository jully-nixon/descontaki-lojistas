import React, { useEffect, useState, useContext } from 'react';
import './style.css';
import Header from '../../components/Header';
import Image from '../../components/Image';
import Button from '../../components/Button';
import Input from '../../components/Input';
import logo from '../../assets/images/logo.png';
import imgEditProfile from '../../assets/images/edit.svg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../services/auth';

toast.configure();

const Profile = () => {
    const authContext = useContext(AuthContext);

    const [edit, editShow] = useState(false);

    useEffect(() => {
        document.body.style.backgroundColor = '#dad8d8'
    }, []);

    let userRecord = authContext;
    const loggedInUser = localStorage.getItem('loggedInUser');

    let userFilter = {};
    if (loggedInUser) {
        userFilter = userRecord.email === loggedInUser;
    }

    const editProfile = () => {
        editShow(true);
    }

    const saveEditions = () => {
        editShow(false);
        toast.success('Salvo com sucesso!', {
            position: "top-right",
            autoClose: 3000,
        });
    }

    return (
        <div className="profile">
            <Header />
            <h1 className="profile--title">Perfil</h1>
            <hr />
            {!edit &&
                <div className="profile--contentShow">
                    <div className="profile--bannerSide">
                        <Image src={logo} alt="Logo" width="150px" heigth="150px" />
                    </div>
                    <div className="profile--userDados">
                        <Image className="profile--edit" src={imgEditProfile} alt="edit" width="24px" heigth="24px" onClick={editProfile} />
                        <h4>CNPJ</h4>
                        <label>{userFilter.cnpj}</label>

                        <h4>Razão Social</h4>
                        <label>{userFilter.razaoSocial}</label>

                        <h4>Nome Fantasia</h4>
                        <label>{userFilter.nomeFantasia}</label>

                        <h4>E-mail</h4>
                        <label>{userFilter.email}</label>
                    </div>
                </div>
            }
            {edit &&
                <div className="profile--contentEdit">
                    <div className="profile--bannerSide">
                        <Image src={logo} alt="Logo" width="150px" heigth="150px" />
                    </div>
                    <div className="profile--userDados">
                        <div className="profile--saveEditions">
                            <Button title="Salvar" handlerButton={saveEditions} />
                        </div>
                        <h4>CNPJ</h4>
                        <Input type="text" defaultValue={userFilter.cnpj} />

                        <h4>Razão Social</h4>
                        <Input type="text" defaultValue={userFilter.razaoSocial} />

                        <h4>Nome Fantasia</h4>
                        <Input type="text" defaultValue={userFilter.nomeFantasia} />

                        <h4>E-mail</h4>
                        <Input type="text" defaultValue={userFilter.email} />

                        <h4>Senha atual</h4>
                        <Input type="text" />

                        <h4>Nova senha</h4>
                        <Input type="text" />

                        <h4>Confirmar senha</h4>
                        <Input type="text" />
                    </div>
                </div>
            }

            <hr />
        </div>
    )
}

export default Profile;