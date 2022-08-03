import styled from 'styled-components';

export const FooterButtons = styled.div`
display: flex;
flex-wrap: wrap;
gap: 1rem;
justify-content: space-between;

div{
  display: flex;
  gap: 1rem;
}

@media (max-width: 480px){
 flex-direction: column;
 gap: 1.2rem;

 div{
  width: 100%;
  justify-content: stretch;
 }
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

@media (max-width: 480px){
  width: 100%;
  justify-content: center;
  font-size: 1.2rem;
}
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
