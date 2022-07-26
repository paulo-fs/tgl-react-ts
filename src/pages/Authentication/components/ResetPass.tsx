import { AuthContainer, InputContainer } from './authStyle';
import { ArrowLeft, ArrowRight } from 'phosphor-react';
import { AuthPrimaryBtn } from '@components/Buttons/AuthPrimaryBtn';
import { AuthSecBtn } from '@components/Buttons/AuthSecBtn';

export function ResetPass(){
	return (
		<AuthContainer>
			<h3>Reset password</h3>
			<form>
				<InputContainer>
  				<input type="email" name="email" id="email" placeholder="Email"/>
				</InputContainer>
				<AuthPrimaryBtn type="submit">
          Send link
					<ArrowRight size={28} color='#B5C401' />
				</AuthPrimaryBtn>
			</form>
			<AuthSecBtn>
				<ArrowLeft size={28} />
        Back
			</AuthSecBtn>
		</AuthContainer>
	);
}
