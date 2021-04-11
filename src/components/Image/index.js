import React from 'react';
import { Logo } from './style';

export default function Image(props) {
    return (
        <>
            <Logo src={props.src} alt={props.alt}></Logo>
        </>
    );
}