import { gamesInfoActions } from '@store/slices/gamesSlice';
import { RootState, useAppDispatch } from '@store/store';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

interface StatusProp {
  isSelected: boolean
}

interface CompnentProps {
  children: string
  key: number
}

export function NumbersBtn({ children } : CompnentProps){
	const dispatch = useAppDispatch();
	const { numberSelectedStyle } = useSelector<RootState>(state => state.gamesInfo);

	function selectNumberHandler(){
		dispatch(gamesInfoActions.markBtnNumberAsSelected());
		console.log(key);
	}

	return (
		<BtnNumber isSelected={numberSelectedStyle} onClick={selectNumberHandler}>
			{children}
		</BtnNumber>
	);
}

const BtnNumber = styled.button<StatusProp>`
  padding: 1.25rem;
  border-radius: 4rem;
  border: none;
  color: ${props => props.theme.white};
  font-style: normal;
  font-weight: bold;
  cursor: pointer;

  background-color: ${props => props.isSelected ? props.theme.gray900 : props.theme.grayAlt};

  display: grid;
  place-content: center;

  transition: .2s;
  &:hover{
    background-color: ${props => props.theme.gray900};
  }
`;
