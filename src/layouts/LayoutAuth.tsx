import { Footer } from '@components/Footer';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export function LayoutAuth(){
	return(
		<LayoutAuthContainer>
			<div className='container'>
  			<Outlet />
			</div>
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

  .container{
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
  }

  @media (max-width: 768px){
    .container{
      flex: 1;
      display: grid;
      place-content: center;
    }

    @media (max-width: 480px){
      .container{
        width: 100%;
        height: 100%;
        display: flex;
      }
    }
  }
`;
