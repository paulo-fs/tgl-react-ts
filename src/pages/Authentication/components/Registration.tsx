import { AuthContainer, InputContainer } from './authStyle';
import { ArrowLeft, ArrowRight } from 'phosphor-react';
import { AuthPrimaryBtn } from '@components/Buttons/AuthPrimaryBtn';
import { AuthSecBtn } from '@components/Buttons/AuthSecBtn';
import { useAppDispatch } from '@store/store';
import { AuthComponentType, uiAuthActions } from '@store/slices/uiAuthSlice';

export function Registration(){
	const dispatch = useAppDispatch();

	function callAuthComponent(){
		dispatch(uiAuthActions.toggleComponent(AuthComponentType.LOGIN_COMPONENT));
	}

	return (
		<AuthContainer>
			<h3>Registration</h3>
			<form>
				<InputContainer>
  				<input type="text" name="name" id="name" placeholder="Name"/>
				</InputContainer>
				<InputContainer>
  				<input type="email" name="email" id="email" placeholder="Email"/>
				</InputContainer>
				<InputContainer>
					<input type="password" name="password" placeholder="Password" />
				</InputContainer>
				<AuthPrimaryBtn type="submit">
          Register
					<ArrowRight size={28} color='#B5C401' />
				</AuthPrimaryBtn>
			</form>
			<AuthSecBtn onClick={callAuthComponent}>
				<ArrowLeft size={28} />
        Back
			</AuthSecBtn>
		</AuthContainer>
	);
}
