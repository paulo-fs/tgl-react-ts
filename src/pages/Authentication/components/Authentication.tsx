import { AuthContainer, InputContainer } from './authStyle';
import { ArrowRight } from 'phosphor-react';
import { AuthPrimaryBtn } from '@components/Buttons/AuthPrimaryBtn';
import { AuthSecBtn } from '@components/Buttons/AuthSecBtn';
// import { authServices } from 'src/shared/services';

export function Authentication(){
	// const { login } = authServices();

	// async function submitHandler() {
	// 	try{
	// 		const resLogin = await login({ email, password });
	// 	} catch(error: any){
	// 		if(error.status === 401){
	// 			alert('Authentication failed!');
	// 		}
	// 	}
	// }

	return (
		<AuthContainer>
			<h3>Authentication</h3>
			<form>
				<InputContainer>
  							<input type="email" name="email" id="email" placeholder="Email"/>
				</InputContainer>
				<InputContainer>
							  <input type="password" name="password" placeholder="Password" />
				</InputContainer>
				<a href="">I forgot my password</a>
				<AuthPrimaryBtn type="submit">
                Log In
					<ArrowRight size={28} color='#B5C401' />
				</AuthPrimaryBtn>
			</form>
			<AuthSecBtn>
            Sign Up
				<ArrowRight size={28} />
			</AuthSecBtn>
		</AuthContainer>
	);
}
