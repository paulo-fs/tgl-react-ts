import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@store/store';
import { FormEvent, useRef } from 'react';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { registerService } from '../../../shared/services/Auth/registerService';
import { AuthComponentType, uiAuthActions } from '@store/slices/uiAuthSlice';
import { AuthPrimaryBtn } from '@components/Buttons/AuthPrimaryBtn';
import { AuthSecBtn } from '@components/Buttons/AuthSecBtn';

import { AuthContainer, InputContainer } from './authStyle';
import { ArrowLeft, ArrowRight } from 'phosphor-react';

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
		const toastResponse = toast.loading('Fazendo seu cadastro...');

		register(body)
			.then(() => {
				navigate('/');
				toast.update(toastResponse, {render: 'Cadastro realizado com sucesso!', type: 'success', isLoading: false, autoClose: 2000});
			})
			.catch(error => {
				toast.update(toastResponse, {render: error.data.error.message, type: 'error', isLoading: false, autoClose: 2000});
			});
	}

	return (
		<AuthContainer>
			<h3>Cadastrar</h3>
			<form>
				<InputContainer>
  				<input type="text" placeholder="Nome" ref={nameInput} />
				</InputContainer>
				<InputContainer>
  				<input type="email" placeholder="Email" ref={emailInput} />
				</InputContainer>
				<InputContainer>
					<input type="password" placeholder="Senha" ref={passInput} />
				</InputContainer>
				<AuthPrimaryBtn
					type="submit"
					onClick={submitHandler}
				>
          Cadastrar
					<ArrowRight size={28} color='#B5C401' />
				</AuthPrimaryBtn>
			</form>
			<AuthSecBtn onClick={callAuthComponent}>
				<ArrowLeft size={28} />
        Voltar
			</AuthSecBtn>
		</AuthContainer>
	);
}
