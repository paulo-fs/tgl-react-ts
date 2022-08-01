import { Navigate, Route, Routes } from 'react-router-dom';

import { LayoutAuth } from '@layouts/LayoutAuth';
import { LayoutGames } from '@layouts/LayoutGames';

import { AuthMainPage } from '@pages/Authentication/AuthMainPage';
import { Bet } from '@pages/Bet/Bet';
import { BetHistory } from '@pages/BetHistory/BetHistory';
import { useSelector } from 'react-redux';
import { RootState } from '@store/store';

export function Router(){
	const { isAuthenticated } = useSelector((state: RootState) => state.auth);

	function NotFound(){
		return isAuthenticated
			? <Navigate to="/bet" replace />
			: <Navigate to="/" replace />;
	}

	return(
		<Routes>
			{ !isAuthenticated &&
        <Route path='/' element={<LayoutAuth />}>
        	<Route path='/' element={<AuthMainPage />} />
        </Route>
			}
			{ isAuthenticated &&
        <Route path='/bet' element={<LayoutGames />}>
        	<Route path='/bet' element={<Bet />} />
        	<Route path='/bet/history' element={<BetHistory />} />
        </Route>
			}
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
}
