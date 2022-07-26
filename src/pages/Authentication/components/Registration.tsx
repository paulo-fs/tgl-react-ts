import { AuthContainer, InputContainer } from './authStyle';
import { ArrowLeft, ArrowRight } from 'phosphor-react';
import { AuthPrimaryBtn } from '@components/Buttons/AuthPrimaryBtn';
import { AuthSecBtn } from '@components/Buttons/AuthSecBtn';

export function Registration(){
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
			<AuthSecBtn>
				<ArrowLeft size={28} />
        Back
			</AuthSecBtn>
		</AuthContainer>
	);
}
