// import ReactModal from 'react-modal';
import { modalActions } from '@store/slices/modalSlice';
import { RootState, useAppDispatch } from '@store/store';
import { useSelector } from 'react-redux';
import Modal from 'react-modal';
import styled from 'styled-components';
import { Warning } from 'phosphor-react';

Modal.setAppElement('#root');

export function ConfirmModal(){
	const { isOpen } = useSelector((state: RootState) => state.modal);
	const dispatch = useAppDispatch();

	function closeModal(){
		dispatch(modalActions.closeModal());
	}

	return(
		<Modal
			isOpen={isOpen}
			onRequestClose={closeModal}
			overlayClassName='modalOverlay'
			className='modalContent'
		>
			<ModalContent>
				<h1>
					<Warning size={48} color='#AB222E' />
				</h1>
				<p>
          Está certo de que deseja limpar este jogo?
				</p>
				<div>
					<Confirm>Confirm</Confirm>
					<Cancel>Cancel</Cancel>
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
