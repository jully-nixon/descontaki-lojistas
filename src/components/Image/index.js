import React from 'react';
import { Logo } from './style';

export default function Image(props) {
    return (
        <>
            <Logo src={props.src} alt={props.alt} width={props.width} height={props.height}></Logo>
        </>
    );
}