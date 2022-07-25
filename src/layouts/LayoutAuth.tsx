import { Footer } from '@components/Footer';
import { Outlet } from 'react-router-dom';

export function LayoutAuth(){
	return(
		<div>
			<Outlet />
			<Footer />
		</div>
	);
}
