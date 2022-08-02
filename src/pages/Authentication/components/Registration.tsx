import { useAppDispatch } from '@store/store';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { registerService } from '../../../shared/services/Auth/registerService';
import { AuthComponentType, uiAuthActions } from '@store/slices/uiAuthSlice';
import { AuthPrimaryBtn } from '@components/Buttons/AuthPrimaryBtn';
import { AuthSecBtn } from '@components/Buttons/AuthSecBtn';

import { AuthContainer, FormikError, InputContainer } from './authStyle';
import { ArrowLeft, ArrowRight } from 'phosphor-react';
import { regFormInitValues, regFormValidationSchema } from './formSchemas/formSchemas';

export function Registration(){
	const emailInput = useRef<HTMLInputElement | null>(null);
	const passInput = useRef<HTMLInputElement | null>(null);
	const nameInput = useRef<HTMLInputElement | null>(null);
	const { register } = registerService();
	const dispatch = useAppDispatch();

	const formik = useFormik({
		initialValues: regFormInitValues,
		validationSchema: yup.object(regFormValidationSchema),

		onSubmit: (values) => {
			const toastResponse = toast.loading('Fazendo seu cadastro...');
			register(values)
				.then(() => {
					toast.update(toastResponse, {render: 'Cadastro realizado com sucesso!', type: 'success', isLoading: false, autoClose: 2000});
					callAuthComponent();
          emailInput.current!.value = '';
          passInput.current!.value = '';
          nameInput.current!.value = '';
				})
				.catch(error => {
					toast.update(toastResponse, {render: error.data.error.message, type: 'error', isLoading: false, autoClose: 2000});
				});
		}
	});

	function callAuthComponent(){
		dispatch(uiAuthActions.toggleComponent(AuthComponentType.LOGIN_COMPONENT));
	}

	return (
		<AuthContainer>
			<h3>Cadastrar</h3>
			<form onSubmit={formik.handleSubmit}>
				<InputContainer>
  				<input
						type="text"
						id="name"
						placeholder="Nome"
						ref={nameInput}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.name}
					/>
					{
						formik.touched.name && formik.errors.name
							? <FormikError>{formik.errors.name}</FormikError>
							: null
					}
				</InputContainer>
				<InputContainer>
  				<input
						type="email"
						id="email"
						placeholder="Email"
						ref={emailInput}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.email}
					/>
					{
						formik.touched.email && formik.errors.email
							? <FormikError>{formik.errors.email}</FormikError>
							: null
					}
				</InputContainer>
				<InputContainer>
					<input
						type="password"
						id="password"
						placeholder="Senha"
						ref={passInput}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.password}
					/>
					{
						formik.touched.password && formik.errors.password
							? <FormikError>{formik.errors.password}</FormikError>
							: null
					}
				</InputContainer>
				<AuthPrimaryBtn
					type="submit"
					disabled={!!(
						formik.errors.name ||
            formik.errors.email ||
            formik.errors.password
					)}
				>
          Cadastrar
					<ArrowRight size={28} color='#B5C401' />
				</AuthPrimaryBtn>
			</form>
			<AuthSecBtn onClick={callAuthComponent}>
				<ArrowLeft size={28} />
        Voltar
			</AuthSecBtn>
		</AuthContainer>
	);
}
