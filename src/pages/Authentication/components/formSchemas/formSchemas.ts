import * as yup from 'yup';

export const registrationFormInitValues = {
	email: ''
};

export const registrationFormValidationSchema = {
	email: yup
		.string()
		.email('Email inválido!')
		.required('O campo de email é obrigatório!')
};
