import { Login } from '@pages/Authentication/Login';
import { Route, Routes } from 'react-router-dom';
import { LayoutAuth } from '@layouts/LayoutAuth';

export function Router(){
	return(
		<Routes>
			<Route path='/' element={<LayoutAuth />}>
				<Route path='/' element={<Login />} />
			</Route>
		</Routes>
	);
}
