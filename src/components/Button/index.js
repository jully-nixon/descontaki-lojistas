import React from 'react';
import { MyButton } from './style';

export default function Button(props) {
    return (
        <>
            <MyButton>{props.title}</MyButton>
        </>
    );
}