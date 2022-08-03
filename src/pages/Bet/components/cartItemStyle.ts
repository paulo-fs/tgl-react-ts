import styled from 'styled-components';

interface PropType {
  gameColor: string
}

export const DeleteBtn = styled.div`
border: none;
cursor: pointer;

&:hover{
  opacity: .7;
}

@media (max-width: 480px){
  font-size: 3rem;
  padding: 0 1rem;
}
`;

export const CartItemContainer = styled.div<PropType>`
display: flex;
align-items: center;
gap: .7rem;

.cartInfos{
  display: flex;
  flex-direction: column;
  gap: .5rem;

  padding: .5rem;
  border-radius: 5px;
  border-left: 4px solid ${props => props.gameColor};

  p{
    font-size: 0.9rem;
    font-weight: bold;
    color: ${props => props.theme.gray500};
  }

  h4{
    font-size: 1rem;
    color: ${props => props.gameColor};

    span{
      color: ${props => props.theme.gray700};
      font-style: normal;
      font-weight: lighter;
      margin-left: .5rem;
    }
  }
}

@media (max-width: 480px){
  width: 100%;
  gap: 1rem;

  .cartInfos{
    p{
      font-size: 1.1rem;
    }

    h4{
      font-size: 1.3rem;
    }
  }
}
`;


