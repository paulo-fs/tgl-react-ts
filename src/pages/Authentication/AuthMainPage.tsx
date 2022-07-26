import { Authentication } from './components/Authentication';
import { Registration } from './components/Registration';
import { ResetPass } from './components/ResetPass';
import { LoginContainer } from './stylesLogin';

export function AuthMainPage(){
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
				{/* <Authentication /> */}
				{/* <ResetPass /> */}
				<Registration />
			</main>
		</LoginContainer>
	);
}
