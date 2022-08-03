import styled from 'styled-components';

export const AuthContainer = styled.div`
  width: 100%;

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

  .forgotPass{
    width: 100%;
    padding: 1.5rem 1.8rem;
    text-align: right;
    color: ${props => props.theme.gray300};
    border: none;
    background-color: transparent;

    transition: .2s;
    &:hover{
      color: ${props => props.theme.gray700};
    }
  }

  @media (max-width: 480px){
    .forgotPass{
      font-size: 1.3rem;
    }
  }
`;

export const InputContainer = styled.div`
  width: 100%;
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

  @media (max-width: 480px){
    padding: 1.2rem 1rem;
    input{
      width: 100%;
      padding: .7rem;
      font-size: 1.2rem;
    }
  }
`;

export const FormikError = styled.div`
  font-size: .8rem;
  color: ${props => props.theme.red500};
  margin-top: .8rem;
  padding-top: .3rem;
  border-top: 1px solid ${props => props.theme.red500};
`;
