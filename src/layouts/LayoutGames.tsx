import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export function LayoutGames(){
	return(
		<LayoutContainer>
			<div>
				<Header />
				<ContentContainer>
					<Outlet />
				</ContentContainer>
			</div>
			<Footer />
		</LayoutContainer>
	);
}

const ContentContainer = styled.div`
  width: 100%;
  padding: 2.5rem 8.8rem;
`;

const LayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
