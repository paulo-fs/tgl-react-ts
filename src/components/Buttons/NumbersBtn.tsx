import styled from 'styled-components';

export function NumbersBtn({ children } : {children: string}){
	return (
		<NumberContainer>
			{children}
		</NumberContainer>
	);
}

const NumberContainer = styled.p`
  padding: 1.25rem;
  border-radius: 4rem;
  background-color: ${props => props.theme.grayAlt};
  color: ${props => props.theme.white};
  font-style: normal;
  font-weight: bold;
  cursor: pointer;

  display: grid;
  place-content: center;

  transition: .2s;
  &:hover{
    background-color: ${props => props.theme.gray900};
  }
`;
