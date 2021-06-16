import * as yup from 'yup';

export const FormValidations = yup.object().shape({
    cnpj: yup
        .string()
        .required('*CNPJ obrigatório'),
    razaoSocial: yup
        .string()
        .required('*Razão Social obrigatório'),
    nomeFantasia: yup
        .string()
        .required('*Nome Fantasia obrigatório'),
    email: yup
        .string()
        .email("Email is invalid")
        .required('*Email obrigatório'),
    senha: yup
        .string()
        .min(8, 'Minimo 8 caracteres')
        .max(14, 'Máximo 14 caracteres')
        .required('*Senha obrigatório'),
    confirmarSenha: yup
        .string()
        .min(8, 'Minimo 8 caracteres')
        .max(14, 'Máximo 14 caracteres')
        .required('*Confirmação de senha obrigatório'),
})

export default FormValidations;