import { Route, Routes } from 'react-router-dom';
import { LayoutAuth } from '@layouts/LayoutAuth';
import { AuthMainPage } from '@pages/Authentication/AuthMainPage';

export function Router(){
	return(
		<Routes>
			<Route path='/' element={<LayoutAuth />}>
				<Route path='/' element={<AuthMainPage />} />
			</Route>
		</Routes>
	);
}
