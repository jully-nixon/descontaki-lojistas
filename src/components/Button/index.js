import React from 'react';
import { MyButton } from './style';

export default function Button(props) {
    return (
        <>
            <MyButton onClick={props.handlerButton} disabled={props.disabled}>{props.title}</MyButton>
        </>
    );
}