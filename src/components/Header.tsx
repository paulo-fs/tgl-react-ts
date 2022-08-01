import { HeaderContainer, Logo, Links } from './headerStyles';
import { ArrowRight } from 'phosphor-react';
import { useAppDispatch } from '@store/store';
import { authActions } from '@store/slices/authSlice';
import { useNavigate } from 'react-router-dom';

export function Header(){
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	function logoutHandler(){
		dispatch(authActions.logout());
		navigate('/');
	}
	return(
		<HeaderContainer>
			<div>
				<Logo>TGL</Logo>
				<Links>
					<button>Home</button>
					<div>
						<button>Account</button>
						<button onClick={logoutHandler}>Log out <ArrowRight size={20} /></button>
					</div>
				</Links>
			</div>
		</HeaderContainer>
	);
}
