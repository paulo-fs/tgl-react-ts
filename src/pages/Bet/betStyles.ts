import styled from 'styled-components';

export const BetPageContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  gap:  2.5rem;
  justify-content: space-between;
`;

export const BetContainer = styled.div`
  max-width: 46rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const HeaderContainer = styled.header`
  h1{
    font-size: 1.5rem;
    text-transform: uppercase;

    span{
      font-weight: lighter;
    }
  }
`;

export const ChooseAGame = styled.div`
  h2{
    font-size: 1.07rem;
    margin-bottom: 1.25rem;
  }

  nav{
    display: flex;
    gap: 1rem;
  }
`;

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

export const BetNumbers = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;
`;

export const FooterButtons = styled.div`
  display: flex;
  justify-content: space-between;

  div{
    display: flex;
    gap: 1rem;
  }
`;

export const BaseButton = styled.button`
  font-style: normal;
  font-weight: bold;
  border-radius: 8px;
  padding: 1rem 1.5rem;

  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const SecBtn = styled(BaseButton)`
  border: 1px solid ${props => props.theme.green2};
  color: ${props => props.theme.green2};

  transition: .2s;
  &:hover{
    background-color: ${props => props.theme.green2};
    color: ${props => props.theme.white};
  }
`;

export const AddToCart = styled(BaseButton)`
  border: none;
  background-color: ${props => props.theme.green2};
  color: ${props => props.theme.white};

  transition: .2s;
  &:hover{
    opacity: .75;
  }
`;

export const CartContainer = styled.aside`
  flex: 1;
  min-width: 19rem;
  max-width: 25rem;
  max-height: 40rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: ${props => props.theme.white};
  border: 2px solid ${props => props.theme.gray200};
  border-radius: 10px;
`;

export const CartContent = styled.div`
  padding: 2rem 1.4rem;

  h2{
    font-size: 1.5rem;
    text-transform: uppercase;
  }

  .cartContent{
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 1.5rem;
  }
`;

export const DeleteBtn = styled.div`
  border: none;
  cursor: pointer;

  &:hover{
    opacity: .7;
  }
`;

export const CartItem = styled.div`
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

export const CartFooter = styled.div`
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

  div{
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
