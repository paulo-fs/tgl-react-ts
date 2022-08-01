import styled from 'styled-components';

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
`;

export const CartContent = styled.div`
padding: 1rem 1.4rem 2rem;
overflow-y: auto;

.cartContent{
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;
}
`;

export const EmptyCart = styled.p`
  color: ${props => props.theme.green2};
  font-size: 1.5rem;
`;

export const CartFooter = styled.div`
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
`;
