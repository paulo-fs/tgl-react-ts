import styled from 'styled-components';

export const AuthPrimaryBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 1.8rem;
  border: none;
  background: transparent;
  color: ${props => props.theme.green1};
  font-size: 2rem;
  font-weight: bold;
  line-height: 0;

  transition: .2s;
  &:not(:disabled):hover{
    opacity: .5;
  }

  &:disabled{
    opacity: .3;
    cursor: not-allowed;
  }
`;
