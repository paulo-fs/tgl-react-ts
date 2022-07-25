import { GlobalStyle } from '@styles/global';
import { defaultTheme } from '@styles/theme/defaultTheme';
import { ThemeProvider } from 'styled-components';


function App() {

	return (
		<ThemeProvider theme={defaultTheme}>
		  <h1>Hello World</h1>
			<GlobalStyle />
		</ThemeProvider>
	);
}

export default App;
