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
`;

export const MainHistory = styled.main`
  & > div + div{
    margin: 2rem 0;
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
`;

export const VerticalBar = styled.div<PropTypes>`
  width: 6px;
  border-radius: 1rem;
  background-color: ${props => props.color};
`;
