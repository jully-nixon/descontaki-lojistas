import React from 'react';
import { MyInput } from './style';

export default function Input(props) {
    return (
        <>
            <MyInput onChange={props.handlerInput} type={props.type} placeholder={props.placeholder} />
        </>
    );
}