import { useSelector } from 'react-redux';

import { authActions } from '@store/slices/authSlice';
import { AuthComponentType } from '@store/slices/uiAuthSlice';
import { RootState, useAppDispatch } from '@store/store';

import { Authentication } from './components/Authentication';
import { Registration } from './components/Registration';
import { ResetPass } from './components/ResetPass';

import { LoginContainer } from './stylesLogin';

export function AuthMainPage(){
	const authComponentSelector = useSelector<RootState>(state => state.uiAuth.visibleComponent);
	const dispatch = useAppDispatch();
	const authData = JSON.parse(localStorage.getItem('@tgl-1.0:auth-data')!);

	if(authData){
		dispatch(authActions.login(authData));
	}

	function switchAuthComponent(){
		switch(authComponentSelector){
		case AuthComponentType.LOGIN_COMPONENT:
			return <Authentication />;
		case AuthComponentType.REGISTER_COMPONENT:
			return <Registration />;
		case AuthComponentType.RESET_PASSWORD_COMPONENT:
			return <ResetPass />;
		default:
			return <Authentication />;
		}
	}

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
				{switchAuthComponent()}
			</main>
		</LoginContainer>
	);
}
