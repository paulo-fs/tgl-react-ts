import { FormEvent, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { authServices } from '../../../shared/services/Auth/authServices';
import { useAppDispatch } from '@store/store';
import { AuthComponentType, uiAuthActions } from '@store/slices/uiAuthSlice';
import { authActions } from '@store/slices/authSlice';

import { AuthPrimaryBtn } from '@components/Buttons/AuthPrimaryBtn';
import { AuthSecBtn } from '@components/Buttons/AuthSecBtn';

import { AuthContainer, InputContainer } from './authStyle';
import { ArrowRight } from 'phosphor-react';

export function Authentication(){
	const emailInput = useRef<HTMLInputElement | null>(null);
	const passInput = useRef<HTMLInputElement | null>(null);
	const { login } = authServices();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	async function submitHandler(event: FormEvent) {
		event.preventDefault();
		const bodyLogin = {
			email: emailInput.current!.value,
			password: passInput.current!.value,
		};
		login(bodyLogin)
			.then(response => {
				dispatch(authActions.login(response));
				navigate('/bet');
			});
		emailInput.current!.value = '';
    passInput.current!.value = '';
	}

	function callRegisterComponent(){
		dispatch(uiAuthActions.toggleComponent(AuthComponentType.REGISTER_COMPONENT));
	}

	function callResetPassComponent(){
		dispatch(uiAuthActions.toggleComponent(AuthComponentType.RESET_PASSWORD_COMPONENT));
	}

	return (
		<AuthContainer>
			<h3>Authentication</h3>
			<form onSubmit={submitHandler}>
				<InputContainer>
  				<input type="email" id='email' placeholder="Email" ref={emailInput} />
				</InputContainer>
				<InputContainer>
					<input type="password" placeholder="Password" ref={passInput} />
				</InputContainer>
				<button
					className='forgotPass'
					onClick={callResetPassComponent}
				>
          I forgot my password
				</button>
				<AuthPrimaryBtn type="submit">
          Log In
					<ArrowRight size={28} color='#B5C401' />
				</AuthPrimaryBtn>
			</form>
			<AuthSecBtn onClick={callRegisterComponent}>
        Sign Up
				<ArrowRight size={28} />
			</AuthSecBtn>
		</AuthContainer>
	);
}
