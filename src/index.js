import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import 'react-toastify/dist/ReactToastify.min.css'
import 'react-calendar/dist/Calendar.css'
import './app/layout/styles.css'
import App from './app/layout/App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from './app/store/configureStore'
import reportWebVitals from './reportWebVitals'
import ScrollToTop from './app/layout/ScrollToTop'
import { loadEvents } from './features/events/event.Actions'

const store = configureStore()

store.dispatch(loadEvents())

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

reportWebVitals()
