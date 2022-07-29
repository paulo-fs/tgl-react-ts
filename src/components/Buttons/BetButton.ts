import styled from 'styled-components';

interface PropTypes{
  isSelected: boolean
}

export const BetButton = styled.button<PropTypes>`
  padding: .5rem 1.5rem;
  border-radius: 2rem;
  border: 2px solid ${props => props.color};
  font-weight: bold;

  color: ${props => props.isSelected ? props.theme.white : props.color};
  background-color: ${props => props.isSelected ? props.color : 'transparent'};

  transition: .2s;
  &:hover{
    color: ${props => props.theme.white};
    background-color: ${props => props.color};
  }
`;
