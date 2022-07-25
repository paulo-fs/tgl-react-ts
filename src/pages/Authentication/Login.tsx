import { Button, InputContainer, LoginContainer, SingupButton } from './stylesLogin';
import { ArrowRight } from 'phosphor-react';


export function Login(){
	return(
		<LoginContainer>
			<header>
				<h2>The</h2>
				<h2>Greatest</h2>
				<h2>App</h2>
				<p>for</p>
				<h1>Lottery</h1>
			</header>

			<main>
				<div>
					<h3>Authentication</h3>
					<form>
						<InputContainer>
  							<input type="email" name="email" id="email" placeholder="Email"/>
						</InputContainer>
						<InputContainer>
							  <input type="password" name="password" placeholder="Password" />
						</InputContainer>
						<a href="">I forgot my password</a>
						<Button type="submit">
                Log In
							<ArrowRight size={28} color='#B5C401' />
						</Button>
					</form>
					<SingupButton>
            Sign Up
						<ArrowRight size={28} />
					</SingupButton>
				</div>
			</main>
		</LoginContainer>
	);
}
