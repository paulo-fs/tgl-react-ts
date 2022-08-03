import styled from 'styled-components';

interface CartPropsType{
  mobileDisplay: boolean
}

export const CartContainer = styled.aside`
flex: 1;
min-width: 19rem;
max-width: 25rem;
max-height: 40rem;
height: fit-content;

display: flex;
flex-direction: column;
justify-content: space-between;

position: sticky;
top: 6.5rem;

background-color: ${props => props.theme.white};
border: 2px solid ${props => props.theme.gray200};
border-radius: 10px;

h2{
  padding: 2rem 1.4rem 0.5rem;
  font-size: 1.5rem;
  text-transform: uppercase;

  span{
    margin-left: .5rem;
    font-size: 1rem;
    font-weight: lighter;
    font-style: normal;
    text-transform: none;
  }
}

@media (max-width: 480px){
  width: 100%;
  max-width: 100%;
  position: sticky;
  top: 3rem;

  h2{
    font-size: 1.8rem;
    padding: 1rem 1.2rem 0.5rem;

    span{
      font-size: 1.3rem;
      margin-left: 1.5rem;
    }
  }

  &::after{
    content: 'Clique para expandir ou encolher o carrinho.';
    position: absolute;
    bottom: -2rem;

    background-color: ${props => props.theme.gray100};
    width: 100%;
    padding: .2rem;
  }
}
`;

export const CartContent = styled.div<CartPropsType>`
padding: 1rem 1.4rem 2rem;
overflow-y: auto;

.cartContent{
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

@media (max-width: 480px){
  display: ${props => props.mobileDisplay
		? 'initial'
		: 'none'
};
  padding: 0rem 1.2rem 1rem;

  .cartContent{
    gap: 1rem;
    margin-top: 1rem;
  }
}
`;

export const EmptyCart = styled.p`
  color: ${props => props.theme.green2};
  font-size: 1.5rem;

  @media (max-width: 480px){
    font-size: 1.9rem;
  }
`;

export const CartFooter = styled.div<CartPropsType>`
div{
  position: relative;

  p{
    padding: 2.5rem 1.4rem;
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;

    span{
      font-style: normal;
      font-weight: lighter;
    }
  }

  .minCartValue{
    position: absolute;
    bottom: 1.4rem;
    left: 1.4rem;
    font-size: .9rem;
    color: ${props => props.theme.green2};
  }
}

.save{
  width: 100%;
  padding: 1.5rem;
  border-top: 2px solid ${props => props.theme.gray200};
  background-color: ${props => props.theme.gray100};

  display: grid;
  place-content: center;

  button{
    font-size: 2rem;
    color: ${props => props.theme.green2};
    font-weight: bold;
    border: none;
    display: flex;
    align-items: center;
    gap: 1rem;

    transition: .2s;
    &:hover{
      opacity: .5;
    }
  }
}

@media (max-width: 480px){
  display: ${props => props.mobileDisplay
		? 'initial'
		: 'none'
};

  div{
    p{
      padding: 2rem 1rem;
      font-size: 1.7rem;
    }

    .minCartValue{
      bottom: 0.5rem;
      left: 1rem;
      font-size: 1rem;
    }
  }

  .save{
    button{
      font-size: 2.5rem;
      padding: 0.5rem 7rem;
    }
  }
}
`;
