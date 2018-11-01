import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import './index.css'
import App from './App'

render(
  <AppContainer>
    <App/>
  </AppContainer>,
  document.getElementById('app')
)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      document.getElementById('app')
    )
  })
}