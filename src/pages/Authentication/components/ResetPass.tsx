import { useRef } from 'react';
import { resetPassService } from '../../../shared/services/Auth/resetPassService';
import { useAppDispatch } from '@store/store';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { AuthPrimaryBtn } from '@components/Buttons/AuthPrimaryBtn';
import { AuthSecBtn } from '@components/Buttons/AuthSecBtn';

import { AuthComponentType, uiAuthActions } from '@store/slices/uiAuthSlice';
import { authActions } from '@store/slices/authSlice';

import { AuthContainer, FormikError, InputContainer } from './authStyle';
import { ArrowLeft, ArrowRight } from 'phosphor-react';
import { resetPassFormInitValues, resetPassFormValidationSchema } from './formSchemas/formSchemas';

export function ResetPass(){
	const emailInput = useRef<HTMLInputElement | null>(null);
	const { resetPass } = resetPassService();
	const dispatch = useAppDispatch();

	const formik = useFormik({
		initialValues: resetPassFormInitValues,
		validationSchema: yup.object(resetPassFormValidationSchema),

		onSubmit: (values) => {
			const resPassToast = toast.loading('Resetando a senha...');
			resetPass(values)
				.then(() => {
					toast.update(resPassToast, {render: 'Senha resetada com sucesso!', type: 'success', isLoading: false, autoClose: 2000});
					dispatch(authActions.logout());
					emailInput.current!.value = '';
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
			<h3>Resetar senha</h3>
			<form onSubmit={formik.handleSubmit}>
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
				<AuthPrimaryBtn
					type="submit"
					disabled={!!formik.errors.email}
				>
          Enviar link
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
