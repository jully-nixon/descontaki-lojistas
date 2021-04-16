import React from 'react';
import { MyButton } from './style';

export default function Button(props) {
    return (
        <>
            <MyButton onClick={props.handlerButton}>{props.title}</MyButton>
        </>
    );
}