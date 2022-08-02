import { HeaderContainer, Logo, Links } from './headerStyles';
import { ArrowRight } from 'phosphor-react';
import { useAppDispatch } from '@store/store';
import { modalActions } from '@store/slices/modalSlice';
import { ModalActionOptions } from '@store/slices/modalActionsOptions';
import { Link } from 'react-router-dom';

export function Header(){
	const dispatch = useAppDispatch();

	function logoutHandler(){
		const modalData = {
			message: 'Tem certeza que deseja sair?',
			action: ModalActionOptions.LOGOUT
		};
		dispatch(modalActions.showModal(modalData));
	}
	return(
		<HeaderContainer>
			<div>
				<Logo>TGL</Logo>
				<Links>
					<Link to='/bet/history'>Apostas Salvas</Link>
					<div>
						<button>Conta</button>
						<button onClick={logoutHandler}>Sair <ArrowRight size={20} /></button>
					</div>
				</Links>
			</div>
		</HeaderContainer>
	);
}
