import styled from 'styled-components';

export const AuthSecBtn = styled.button`
  color: ${props => props.theme.gray700};
  font-size: 2rem;
  font-weight: bold;
  margin: 2rem auto;
  border: none;

  display: flex;
  align-items: center;
  gap: 1rem;

  transition: .2s;
  &:not(:disabled):hover{
    opacity: .5;
  }
`;
