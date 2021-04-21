import React from 'react';
import { MyButton } from './style';

const Button = ({ handlerButton, disabled, title, ...rest }) => {
    return (
        <>
            <MyButton onClick={handlerButton} disabled={disabled} {...rest}>{title}</MyButton>
        </>
    );
}
export default Button;