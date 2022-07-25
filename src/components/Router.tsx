import { Route, Routes } from 'react-router-dom';
import { LayoutAuth } from 'src/layouts/LayoutAuth';

export function Router(){
	return(
		<Routes>
			<Route path='/' element={<LayoutAuth />}>
				<Route path='/' element={} />
			</Route>
		</Routes>
	);
}
