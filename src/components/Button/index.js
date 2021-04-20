import React from 'react';
import { MyButton } from './style';

export default function Button({ handlerButton, disabled, title, ...rest }) {
    return (
        <>
            <MyButton onClick={handlerButton} disabled={disabled} {...rest}>{title}</MyButton>
        </>
    );
}