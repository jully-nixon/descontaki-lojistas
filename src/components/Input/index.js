import React, { useState } from 'react';
import { MyInput, Span } from './style';

const Input = ({ error, ...rest }) => {
    const [touched, setTouched] = useState(false);
    return (
        <>
            <MyInput  {...rest} onBlur={() => setTouched(true)} />
            <Span>{touched && error}</Span>
        </>
    );
}
export default Input;