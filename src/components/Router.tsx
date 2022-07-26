import { Route, Routes } from 'react-router-dom';
import { LayoutAuth } from '@layouts/LayoutAuth';
import { AuthMainPage } from '@pages/Authentication/AuthMainPage';
import { LayoutGames } from '@layouts/LayoutGames';
import { Bet } from '@pages/Bet/Bet';

export function Router(){
	return(
		<Routes>
			<Route path='/' element={<LayoutAuth />}>
				<Route path='/' element={<AuthMainPage />} />
			</Route>
			<Route path='/bet' element={<LayoutGames />}>
				<Route path='/bet' element={<Bet />} />
				<Route path='/bet/history' element={''} />
			</Route>
		</Routes>
	);
}
