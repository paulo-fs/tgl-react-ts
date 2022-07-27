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
    flex-wrap: wrap;
    gap: 1rem;
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
  flex-wrap: wrap;
  gap: 1rem;
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

