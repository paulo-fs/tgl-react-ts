import { Router } from '@components/Router';
import { GlobalStyle } from '@styles/global';
import { defaultTheme } from '@styles/theme/defaultTheme';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';


function App() {

	return (
		<ThemeProvider theme={defaultTheme}>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
			<GlobalStyle />
		</ThemeProvider>
	);
}

export default App;
