import * as yup from 'yup';

export const resetPassFormInitValues = {
	email: ''
};

export const resetPassFormValidationSchema = {
	email: yup
		.string()
		.email('Email inválido!')
		.required('O campo de email é obrigatório!')
};


export const authFormInitValues = {
	email: '',
	password: ''
};

export const authFormValidationSchema = {
	email: yup
		.string()
		.email('Email inválido!')
		.required('O campo de email é obrigatório'),
	password: yup
		.string()
		.min(6, 'A senha precisa ter pelo menos 6 caracteres')
		.required('O campo de senha é obrigatório')
};

