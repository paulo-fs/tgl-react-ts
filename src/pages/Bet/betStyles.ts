import styled from 'styled-components';

export const BetPageContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  gap:  2.5rem;
  justify-content: space-between;

  @media (max-width: 768px){
    max-width: 768px;
    gap: 1.5rem;
  }

  @media (max-width: 480px){
    width: 100%;
    flex-direction: column-reverse;
    gap: 4rem;

    aside{
      width: 100%;
    }
  }
`;

export const BetContainer = styled.div`
  max-width: 46rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 480px){
    h3{
      font-size: 1.5rem;
    }

    p{
      font-size: 1.2rem;
    }
  }
`;

export const HeaderContainer = styled.header`
  h1{
    font-size: 1.5rem;
    text-transform: uppercase;

    span{
      font-weight: lighter;
    }
  }

  @media (max-width: 480px){
    h1{
      font-size: 1.8rem;
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

  @media (max-width: 480px){
    h2{
      font-size: 1.5rem;
    }

    nav{
      justify-content: space-between;
    }
  }
`;

