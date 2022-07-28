import { AuthContainer, InputContainer } from './authStyle';
import { ArrowRight } from 'phosphor-react';
import { AuthPrimaryBtn } from '@components/Buttons/AuthPrimaryBtn';
import { AuthSecBtn } from '@components/Buttons/AuthSecBtn';
import { useAppDispatch } from '@store/store';
import { AuthComponentType, uiAuthActions } from '@store/slices/uiAuthSlice';
import { useNavigate } from 'react-router-dom';

export function Authentication(){
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	async function submitHandler() {
		// navigate('/bet');

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
  				<input type="email" name="email" id="email" placeholder="Email"/>
				</InputContainer>
				<InputContainer>
					<input type="password" name="password" placeholder="Password" />
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
