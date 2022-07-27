import styled from 'styled-components';

export const BetButton = styled.button`
  padding: .5rem 1.5rem;
  border-radius: 2rem;
  border: 2px solid ${props => props.theme.green2};
  color: ${props => props.theme.green2};
  font-weight: bold;

  transition: .2s;
  &:hover{
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.green2};
  }
`;
