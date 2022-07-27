import { Footer } from '@components/Footer';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export function LayoutAuth(){
	return(
		<LayoutAuthContainer>
			<Outlet />
			<Footer />
		</LayoutAuthContainer>
	);
}

const LayoutAuthContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
