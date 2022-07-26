import styled from 'styled-components';

export function Footer(){
	return(
		<FooterContainer>
			<p>
        Copyright 2020 Luby Software
			</p>
		</FooterContainer>
	);
}

const FooterContainer = styled.footer`
  width: 100vw;
  padding: 1.5rem 0;
  text-align: center;
  border-top: 2px solid ${props => props.theme.gray200};

  p{
    font-style: normal;
    font-size: 0.85rem;
    color: ${props => props.theme.gray700}
  }
`;
