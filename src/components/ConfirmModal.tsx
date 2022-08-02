import Modal from 'react-modal';
import { toast } from 'react-toastify';
import { betService } from '../shared/services/Bets/betService';
import { RootState, useAppDispatch } from '@store/store';
import { useSelector } from 'react-redux';

import { authActions } from '@store/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { modalActions } from '@store/slices/modalSlice';
import { ModalActionOptions } from '@store/slices/modalActionsOptions';
import { gamesInfoActions } from '@store/slices/gamesSlice';
import { cartActions } from '@store/slices/cartSlice';

import styled from 'styled-components';
import { Warning } from 'phosphor-react';

Modal.setAppElement('#root');

export function ConfirmModal(){
	const { isOpen, modalMessage, modalAction, id } = useSelector((state: RootState) => state.modal);
	const { betList } = useSelector((state: RootState) => state.cart);
	const { postBetsData } = betService();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const games = {
		games: betList!.map(bet => {
			return {game_id: bet.gameId, numbers: bet.numbers};
		})
	};

	const games2 = {
		games: games
	};

	function closeModal(){
		dispatch(modalActions.closeModal());
	}

	function confirmHandler(){
		dispatch(modalActions.closeModal());

		switch(modalAction){
		case ModalActionOptions.CLEAR_GAME:
			toast.success('Aposta limpa');
			return dispatch(gamesInfoActions.clearGame());

		case ModalActionOptions.DELETE_BET:
			toast.success('Aposta deletada!');
			return dispatch(cartActions.deleteFromCart(id));

		case ModalActionOptions.SAVE_CART:
			const toastSaveCart = toast.loading('Salvando carrinho...');
			postBetsData(games2).then(() => {
				toast.update(toastSaveCart, {render: 'Carrinho salvo com sucesso!', type: 'success', isLoading: false, autoClose: 2000});
				dispatch(cartActions.clearCartValues());
			}).catch(error => {
				toast.update(toastSaveCart, {render: error.data.message, type: 'error', isLoading: false, autoClose: 2000});
				console.log(error.data);
			});
			return;

		case ModalActionOptions.LOGOUT:
			dispatch(authActions.logout());
			toast.success('Até a próxima!');
			return navigate('/');
		default:
			return '';
		}
	}

	function cancelHandler(){
		dispatch(modalActions.closeModal());
	}

	function clearModalData(){
		dispatch(modalActions.clearModalData());
	}

	return(
		<Modal
			isOpen={isOpen}
			onRequestClose={closeModal}
			onAfterClose={clearModalData}
			overlayClassName='modalOverlay'
			className='modalContent'
		>
			<ModalContent>
				<h1>
					<Warning size={48} color='#AB222E' />
				</h1>
				<p>
					{ modalMessage }
				</p>
				<div>
					<Confirm onClick={confirmHandler}>Confirm</Confirm>
					<Cancel onClick={cancelHandler}>Cancel</Cancel>
				</div>
			</ModalContent>
		</Modal>
	);
}

const ModalContent = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1{
    text-align: center;
    margin-bottom: -3rem;
  }

  p{
    font-size: 1.3rem;
    text-align: center;
  }

  div{
    align-self: center;

    button + button {
      margin-left: 2rem;
    }
  }
`;

const BaseButton = styled.button`
  padding: 1rem 2.5rem;
  border-radius: 10px;
  border: none;
  font-weight: bold;
  font-style: normal;
  color: ${props => props.theme.white};

  transition: .2s;
`;

const Confirm = styled(BaseButton)`
  background-color: ${props => props.theme.green2};

  &:hover{
    background-color: ${props => props.theme.green2Dark};
  }
`;

const Cancel = styled(BaseButton)`
  background-color: ${props => props.theme.red500};

  &:hover{
    background-color: ${props => props.theme.red700};
  }
`;
