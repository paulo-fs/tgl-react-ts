import { AuthContainer, InputContainer } from './authStyle';
import { ArrowLeft, ArrowRight } from 'phosphor-react';
import { AuthPrimaryBtn } from '@components/Buttons/AuthPrimaryBtn';
import { AuthSecBtn } from '@components/Buttons/AuthSecBtn';
import { useAppDispatch } from '@store/store';
import { AuthComponentType, uiAuthActions } from '@store/slices/uiAuthSlice';
import { FormEvent, useRef } from 'react';
import { resetPassService } from '../../../shared/services/Auth/resetPassService';
import { authActions } from '@store/slices/authSlice';
import { toast } from 'react-toastify';

export function ResetPass(){
	const emailInput = useRef<HTMLInputElement | null>(null);
	const { resetPass } = resetPassService();
	const dispatch = useAppDispatch();

	function callAuthComponent(){
		dispatch(uiAuthActions.toggleComponent(AuthComponentType.LOGIN_COMPONENT));
	}

	async function submitHandler(event: FormEvent){
		event.preventDefault();
		const enteredEmail = {email: emailInput.current!.value};
		const resPassToast = toast.loading('Please wait...');
		resetPass(enteredEmail)
			.then(response => {
				console.log(response);
				toast.update(resPassToast, {render: 'Password reseted!', type: 'success', isLoading: false, autoClose: 2000});
				dispatch(authActions.logout());
			})
			.catch(error => {
				console.log(error);
				toast.update(resPassToast, {render: error.data.message, type: 'error', isLoading: false, autoClose: 2000});
			});
	}

	return (
		<AuthContainer>
			<h3>Reset password</h3>
			<form onSubmit={submitHandler}>
				<InputContainer>
  				<input type="email" id="email" placeholder="Email" ref={emailInput} />
				</InputContainer>
				<AuthPrimaryBtn type="submit">
          Send link
					<ArrowRight size={28} color='#B5C401' />
				</AuthPrimaryBtn>
			</form>
			<AuthSecBtn onClick={callAuthComponent}>
				<ArrowLeft size={28} />
        Back
			</AuthSecBtn>
		</AuthContainer>
	);
}
