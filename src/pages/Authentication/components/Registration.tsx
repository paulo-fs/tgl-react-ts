import { AuthContainer, InputContainer } from './authStyle';
import { ArrowLeft, ArrowRight } from 'phosphor-react';
import { AuthPrimaryBtn } from '@components/Buttons/AuthPrimaryBtn';
import { AuthSecBtn } from '@components/Buttons/AuthSecBtn';
import { useAppDispatch } from '@store/store';
import { AuthComponentType, uiAuthActions } from '@store/slices/uiAuthSlice';
import { FormEvent, useRef } from 'react';
import { registerService } from '../../../shared/services/Auth/registerService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export function Registration(){
	const emailInput = useRef<HTMLInputElement | null>(null);
	const passInput = useRef<HTMLInputElement | null>(null);
	const nameInput = useRef<HTMLInputElement | null>(null);
	const navigate = useNavigate();
	const { register } = registerService();
	const dispatch = useAppDispatch();

	function callAuthComponent(){
		dispatch(uiAuthActions.toggleComponent(AuthComponentType.LOGIN_COMPONENT));
	}

	async function submitHandler(event: FormEvent){
		event.preventDefault();
		const body = {
			name: nameInput.current!.value,
			email: emailInput.current!.value,
			password: passInput.current!.value
		};
		const toastResponse = toast.loading('Please wait...');

		register(body)
			.then(() => {
				navigate('/');
				toast.update(toastResponse, {render: 'Registered successfully!', type: 'success', isLoading: false, autoClose: 2000});
			})
			.catch(error => {
				toast.update(toastResponse, {render: error.data.error.message, type: 'error', isLoading: false, autoClose: 2000});
			});
	}

	return (
		<AuthContainer>
			<h3>Registration</h3>
			<form>
				<InputContainer>
  				<input type="text" placeholder="Name" ref={nameInput} />
				</InputContainer>
				<InputContainer>
  				<input type="email" placeholder="Email" ref={emailInput} />
				</InputContainer>
				<InputContainer>
					<input type="password" placeholder="Password" ref={passInput} />
				</InputContainer>
				<AuthPrimaryBtn type="submit" onClick={submitHandler}>
          Register
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
