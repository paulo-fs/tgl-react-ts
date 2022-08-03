import { useRef } from 'react';
import { changePassServices } from '../../../shared/services/Auth/changePassService';
import { RootState, useAppDispatch } from '@store/store';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { AuthPrimaryBtn } from '@components/Buttons/AuthPrimaryBtn';
import { AuthSecBtn } from '@components/Buttons/AuthSecBtn';

import { AuthComponentType, uiAuthActions } from '@store/slices/uiAuthSlice';
import { authActions } from '@store/slices/authSlice';

import { AuthContainer, FormikError, InputContainer } from './authStyle';
import { ArrowLeft, ArrowRight } from 'phosphor-react';
import { changePassFormInitValues, changePassFormValidationSchema } from './formSchemas/formSchemas';
import { useSelector } from 'react-redux';

export function ChangePass(){
	const passwordInput = useRef<HTMLInputElement | null>(null);
	const { resetPassToken, email } = useSelector((state: RootState) => state.auth);
	const { changePassword } = changePassServices();
	const dispatch = useAppDispatch();

	const formik = useFormik({
		initialValues: changePassFormInitValues,
		validationSchema: yup.object(changePassFormValidationSchema),

		onSubmit: (values) => {
			const resPassToast = toast.loading('Resetando a senha...');
			const bodyReq = {
				password: {email: email, password: values.password},
				token: resetPassToken
			};
			changePassword(bodyReq)
				.then((response) => {
					toast.update(resPassToast, {render: 'Senha resetada com sucesso!', type: 'success', isLoading: false, autoClose: 2000});
					dispatch(authActions.logout());
					passwordInput.current!.value = '';
					console.log(response);
					callAuthComponent();
				})
				.catch(error => {
					toast.update(resPassToast, {render: error.data.message, type: 'error', isLoading: false, autoClose: 2000});
				});
		}
	});

	function callAuthComponent(){
		dispatch(uiAuthActions.toggleComponent(AuthComponentType.LOGIN_COMPONENT));
	}

	return (
		<AuthContainer>
			<h3>Alterar a senha</h3>
			<form onSubmit={formik.handleSubmit}>
				<InputContainer>
  				<input
						type="password"
						id="password"
						placeholder="Digite a nova senha"
						ref={passwordInput}
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
					disabled={!!formik.errors.password}
				>
          Alterar a senha
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
