import styled from 'styled-components';

export const HeaderHistory = styled.header`
  margin: 2rem 0;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

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
`;

export const NewBetBtn = styled.button`
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.green1};

  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const MainHistory = styled.main`
  & > div + div{
    margin: 2rem 0;
  }
`;

export const HistoryItem = styled.div`
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
    color: ${props => props.theme.green2};
  }
`;

export const VerticalBar = styled.div`
  width: 6px;
  border-radius: 1rem;
  background-color: ${props => props.theme.green2};
`;
