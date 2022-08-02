import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  padding: .7rem 8.8rem 0.4rem;
  border-bottom: 2px solid ${props => props.theme.gray200};

  & > div{
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 4.5rem;
  }
`;

export const Logo  = styled.h1`
  font-size: 2.5rem;
  position: relative;

  &::before{
    content: '';
    width: 6rem;
    height: 0.45rem;
    background-color: ${props => props.theme.green1};
    border-radius: 2rem;

    position: absolute;
    top: 3.48rem;
    left: -0.8rem;
  }
`;

export const Links = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  div{
    display: flex;
    gap: 2.5rem;
  }

  button, a{
    font-size: 1.25rem;
    font-weight: bold;
    border: none;

    display: flex;
    align-items: center;
    gap: .5rem;

    transition: .2s;
    &:hover{
      color: ${props => props.theme.green1};
    }
  }
`;
