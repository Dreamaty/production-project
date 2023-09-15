import App from 'app/App'
import { ThemeProvider } from 'app/providers/ThemeProvider'
// eslint-disable-next-line react/no-deprecated
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import 'shared/config/i18n/i18n'

render(
	<BrowserRouter>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</BrowserRouter>,
	document.getElementById('root')
)
