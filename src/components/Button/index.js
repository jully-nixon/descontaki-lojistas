import React from 'react';
import { MyButton } from './style';

const Button = ({ handlerButton, disabled, title, width, ...rest }) => {
    return (
        <>
            <MyButton onClick={handlerButton} disabled={disabled} width={width} {...rest}>{title}</MyButton>
        </>
    );
}
export default Button;