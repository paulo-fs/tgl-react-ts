import { Router } from '@components/Router';
import { GlobalStyle } from '@styles/global';
import { defaultTheme } from '@styles/theme/defaultTheme';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ConfirmModal } from '@components/ConfirmModal';


function App() {

	return (
		<ThemeProvider theme={defaultTheme}>
			<BrowserRouter>
				<Router />
				<ConfirmModal />
			</BrowserRouter>
			<GlobalStyle />
			<ToastContainer autoClose={3000} />
		</ThemeProvider>
	);
}

export default App;
