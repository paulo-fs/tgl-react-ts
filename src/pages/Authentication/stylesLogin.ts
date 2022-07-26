import styled from 'styled-components';

export const LoginContainer = styled.div`
  padding: 9.8rem 9.75rem;
  display: flex;
  justify-content: space-between;

  header{
    text-align: center;

    h2{
      font-size: 4rem;
      line-height: 1;
    }

    h1{
      font-size: 5rem;
      text-transform: uppercase;
    }

    p{
      color: ${props => props.theme.white};
      font-size: 1.375rem;
      background-color: ${props => props.theme.green1};
      display: inline-block;
      padding: 0.35rem 3.5rem 0.375rem;
      border-radius: 4rem;
      margin-top: 2rem;
    }
  }

  main{
    width: 22rem;
    max-width: 22rem;
    display: flex;
    margin-left: 6rem;
  }
`;
