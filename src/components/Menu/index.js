import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './style.css';

const MenuSide = () => {
    return (
        <Menu>
            <a id="home" className="menu-item" href="/home">Home</a>
            <a id="profile" className="menu-item" href="/profile">Perfil</a>
            <a id="check-coupon" className="menu-item" href="/check-coupons">Verificar Cupom</a>
            <a id="reports" className="menu-item" href="/">Relatórios</a>
            <a id="logout" className="menu-item--small" href="/">Sair</a>
        </Menu>
    );
}
export default MenuSide;