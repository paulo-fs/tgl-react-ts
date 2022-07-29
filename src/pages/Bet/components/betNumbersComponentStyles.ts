import styled from 'styled-components';

export const BetNumbers = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
gap: 1rem;
margin: 1rem 0;
`;

interface StatusProp {
  isSelected: boolean
}

export const BtnNumber = styled.button<StatusProp>`
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
