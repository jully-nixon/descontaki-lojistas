import React from 'react';
import { MyInput } from './style';

export default function Input(props) {
    return (
        <>
            <MyInput type={props.type} placeholder={props.placeholder} />
        </>
    );
}