import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { authServices } from '../../../shared/services/Auth/authServices';
import { useAppDispatch } from '@store/store';
import { AuthComponentType, uiAuthActions } from '@store/slices/uiAuthSlice';
import { authActions } from '@store/slices/authSlice';

import { AuthPrimaryBtn } from '@components/Buttons/AuthPrimaryBtn';
import { AuthSecBtn } from '@components/Buttons/AuthSecBtn';

import { AuthContainer, FormikError, InputContainer } from './authStyle';
import { ArrowRight } from 'phosphor-react';
import { authFormInitValues, authFormValidationSchema } from './formSchemas/formSchemas';

export function Authentication(){
	const emailInput = useRef<HTMLInputElement | null>(null);
	const passInput = useRef<HTMLInputElement | null>(null);
	const { login } = authServices();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: authFormInitValues,
		validationSchema: yup.object(authFormValidationSchema),
		onSubmit: (values) => {
			const toastLoading = toast.loading(('Entrando...'));
			login(values)
				.then(response => {
					toast.update(toastLoading, {render: 'Você está logado!', type: 'success', isLoading: false, autoClose: 2000});
					const authDataJSON = JSON.stringify(response);
					localStorage.setItem('@tgl-1.0:auth-data', authDataJSON);
					dispatch(authActions.login(response));
					navigate('/bet');
          emailInput.current!.value = '';
          passInput.current!.value = '';
				})
				.catch((error) => {
					toast.update(toastLoading, {render: error.data.message, type: 'error', isLoading: false, autoClose: 2000});
				});
		}
	});

	function callRegisterComponent(){
		dispatch(uiAuthActions.toggleComponent(AuthComponentType.REGISTER_COMPONENT));
	}

	function callResetPassComponent(){
		dispatch(uiAuthActions.toggleComponent(AuthComponentType.RESET_PASSWORD_COMPONENT));
	}

	return (
		<AuthContainer>
			<h3>Autenticação</h3>
			<form onSubmit={formik.handleSubmit}>
				<InputContainer>
  				<input
						type="email"
						placeholder="Email"
						id='email'
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
						value={formik.values.password}
					/>
					{
						formik.touched.password && formik.errors.password
							? <FormikError>{formik.errors.password}</FormikError>
							: null
					}
				</InputContainer>
				<button
					className='forgotPass'
					onClick={callResetPassComponent}
				>
          Esqueci minha senha
				</button>
				<AuthPrimaryBtn
					type="submit"
					disabled={!!(formik.errors.email || formik.errors.password)}
				>
          Entrar
					<ArrowRight size={28} color='#B5C401' />
				</AuthPrimaryBtn>
			</form>
			<AuthSecBtn onClick={callRegisterComponent}>
        Cadastrar
				<ArrowRight size={28} />
			</AuthSecBtn>
		</AuthContainer>
	);
}
