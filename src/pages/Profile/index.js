import React, { useEffect, useState } from 'react';
import './style.css';
import Menu from '../../components/Menu';
import Image from '../../components/Image';
import Button from '../../components/Button';
import Input from '../../components/Input';
import logo from '../../assets/images/logo.png';
import imgEditProfile from '../../assets/images/edit.svg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
const Profile = () => {
    const [edit, editShow] = useState(false);

    useEffect(() => {
        document.body.style.backgroundColor = '#dad8d8'
    }, []);

    let userRecords = JSON.parse(localStorage.getItem('formData'));

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
            <Menu />
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
                        <label>{userRecords[0].cnpj}</label>

                        <h4>Razão Social</h4>
                        <label>{userRecords[0].razaoSocial}</label>

                        <h4>Nome Fantasia</h4>
                        <label>{userRecords[0].nomeFantasia}</label>

                        <h4>E-mail</h4>
                        <label>{userRecords[0].email}</label>
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
                        <Input type="text" defaultValue={userRecords[0].cnpj} />

                        <h4>Razão Social</h4>
                        <Input type="text" defaultValue={userRecords[0].razaoSocial} />

                        <h4>Nome Fantasia</h4>
                        <Input type="text" defaultValue={userRecords[0].nomeFantasia} />

                        <h4>E-mail</h4>
                        <Input type="text" defaultValue={userRecords[0].email} />
                    </div>
                </div>
            }

            <hr />
        </div>
    )
}

export default Profile;