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

    div{
      width: 100%;
    }

    h3{
      font-size: 2rem;
      text-align: center;
      margin-bottom: 1.3rem;
    }

    form{
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;

      border-radius: 14px;
      border: 2px solid ${props => props.theme.gray200};
      background-color: ${props => props.theme.white};

      box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.1);
    }

    a{
      width: 100%;
      padding: 1.5rem 1.8rem;
      text-align: right;
      color: ${props => props.theme.gray300};

      transition: .2s;
      &:hover{
        color: ${props => props.theme.gray700};
      }
    }

  }
`;

export const InputContainer = styled.div`
  padding: 1.7rem 2rem;
  border-bottom: 1px solid ${props => props.theme.gray200};

    input{
      border: none;
      background: transparent;

      &:focus{
        border: none;
        outline: 0;
      }

      &::placeholder{
        color: ${props => props.theme.gray500};
        font-weight: bold;
      }
    }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 1.8rem;
  border: none;
  background: transparent;
  color: ${props => props.theme.green1};
  font-size: 2rem;
  font-weight: bold;
  line-height: 0;

  transition: .2s;
  &:not(:disabled):hover{
    opacity: .5;
  }
`;

export const SingupButton = styled.button`
  color: ${props => props.theme.gray700};
  font-size: 2rem;
  font-weight: bold;
  margin: 2rem auto;
  border: none;

  display: flex;
  align-items: center;
  gap: 1rem;

  transition: .2s;
  &:not(:disabled):hover{
    opacity: .5;
  }
`;
