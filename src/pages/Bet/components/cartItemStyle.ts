import styled from 'styled-components';

export const DeleteBtn = styled.div`
border: none;
cursor: pointer;

&:hover{
  opacity: .7;
}
`;

export const CartItemContainer = styled.div`
display: flex;
align-items: center;
gap: .7rem;

.cartInfos{
  display: flex;
  flex-direction: column;
  gap: .5rem;

  padding: .5rem;
  border-radius: 5px;
  border-left: 4px solid ${props => props.theme.green2};

  p{
    font-size: 0.9rem;
    font-weight: bold;
    color: ${props => props.theme.gray500};
  }

  h4{
    font-size: 1rem;
    color: ${props => props.theme.green2};

    span{
      font-style: normal;
      font-weight: lighter;
      margin-left: .5rem;
    }
  }
}
`;


