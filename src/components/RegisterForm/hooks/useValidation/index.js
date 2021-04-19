import { useState, useEffect } from 'react';
import { ValidationError } from 'yup';

const useValidation = (values, schema) => {
    const [errors, setErrors] = useState({});
    const [invalid, formInvalid] = useState(true);

    const validate = async () => {
        try {
            await schema.validate(values, { abortEarly: false });
            setErrors({});
            formInvalid(false);
        } catch (e) {
            if (e instanceof ValidationError) {
                const errors = {}
                e.inner.forEach((key) => {
                    errors[key.path] = key.message;
                })
                setErrors(errors);
            }

        }
    }

    useEffect(() => {
        validate()
    }, [values])

    return { errors, invalid }

}

export default useValidation;