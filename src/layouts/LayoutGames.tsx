import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export function LayoutGames(){
	return(
		<div>
			<Header />
			<ContentContainer>
			  <Outlet />
			</ContentContainer>
			<Footer />
		</div>
	);
}

const ContentContainer = styled.div`
  width: 100%;
  padding: 2.5rem 8.8rem;
`;
