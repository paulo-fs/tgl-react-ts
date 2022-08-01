// import ReactModal from 'react-modal';
import { modalActions } from '@store/slices/modalSlice';
import { RootState, useAppDispatch } from '@store/store';
import { useSelector } from 'react-redux';
import Modal from 'react-modal';

export function ConfirmModal(){
	const { isOpen } = useSelector((state: RootState) => state.modal);
	const dispatch = useAppDispatch();

	function closeModal(){
		dispatch(modalActions.closeModal());
	}

	return(
		<>
			<Modal isOpen={isOpen} onRequestClose={closeModal}>
				<h1>Modal</h1>
			</Modal>
		</>
	);
}
