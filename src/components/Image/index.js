import React from 'react';
import { Logo } from './style';

const Image = ({ src, alt, width, height, ...rest }) => {
    return (
        <>
            <Logo src={src} alt={alt} width={width} height={height} {...rest}></Logo>
        </>
    );
}
export default Image;