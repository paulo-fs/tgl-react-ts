import styled from 'styled-components';

interface PropTypes {
  color: string
}

export const HeaderHistory = styled.header`
  margin: 2rem 0;

  display: flex;
  flex-wrap: wrap-reverse;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  div{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 2rem;

    nav{
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }

  .newBet{
    font-size: 1.5rem;
    font-weight: bold;
    color: ${props => props.theme.green1};

    display: flex;
    align-items: center;
    gap: 1rem;

    transition: .2s;
    &:hover{
      opacity: .5;
    }
  }

  @media (max-width: 768px){
    gap: 1rem;
    flex-direction: column-reverse;
    align-items: flex-start;

    div{
      width: 100%;
      flex-direction: column;
      align-items: flex-start;

      nav{
        gap: 2rem;
      }
    }

    .newBet{
      font-size: 2rem;
      align-self: right;
    }
  }

  @media (max-width: 480px){
    margin: 1rem 0;

    div{
      gap: 1rem;

      nav{
        flex-wrap: wrap;
        gap: 1rem;

        p{
          font-size: 1.5rem;
          margin-right: 1rem;
        }

        button{
          font-size: 1.2rem;
          padding: 0.8rem 3rem;
        }
      }
    }
  }
`;

export const MainHistory = styled.main`
  & > div + div{
    margin: 2rem 0;
  }

  @media (max-width: 768px){
    & > div + div{
      margin: 1rem 0;
    }
  }
`;

export const HistoryItem = styled.div<PropTypes>`
  display: flex;
  gap: .5rem;

  p + p {
    margin: .5rem 0;
  }

  .numbers{
    font-size: 1.125rem;
    font-weight: bold;
  }

  .date{
    font-style: normal;
  }

  .game{
    font-size: 1.125rem;
    font-weight: bold;
    color: ${props => props.color};
  }

  @media (max-width: 480px){
    .numbers{
      font-size: 1.2rem;
    }

    .date{
      font-size: 1.1rem;
    }

    .game{
      font-size: 1.2rem;
    }
  }
`;

export const VerticalBar = styled.div<PropTypes>`
  width: 6px;
  border-radius: 1rem;
  background-color: ${props => props.color};

  @media (max-width: 768px){
    width: 4px;
  }

  @media (max-width: 480px){
    width: 3px;
  }
`;

export const EmptyBetList = styled.main`
  padding: 6rem 0rem;
  text-transform: uppercase;
  h3{
    font-weight: lighter;
    font-size: 1.3rem;
    font-style: normal;
  }
  h1{
    font-size: 2.4rem;
    color: ${props => props.theme.green2};
  }

  @media (max-width: 480px){
    h3{
      font-size: 2rem;
    }

    h1{
      font-size: 3rem;
    }
  }
`;
