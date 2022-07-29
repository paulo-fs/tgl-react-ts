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

