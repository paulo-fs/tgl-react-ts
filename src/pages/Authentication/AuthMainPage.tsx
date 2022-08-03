import { useSelector } from 'react-redux';

import { authActions } from '@store/slices/authSlice';
import { AuthComponentType } from '@store/slices/uiAuthSlice';
import { RootState, useAppDispatch } from '@store/store';

import { Authentication } from './components/Authentication';
import { Registration } from './components/Registration';
import { ResetPass } from './components/ResetPass';
import { ChangePass } from './components/ChangePass';

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
		case AuthComponentType.CHANGE_PASS:
			return <ChangePass />;
		default:
			return;
		}
	}

	return(
		<LoginContainer>
			<header>
				<h2>O</h2>
				<h2>Maior</h2>
				<h2>App</h2>
				<p>para</p>
				<h1>Loteria</h1>
			</header>

			<main>
				{switchAuthComponent()}
			</main>
		</LoginContainer>
	);
}
