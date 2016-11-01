/* eslint-disable import/default */

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { IntlProvider, addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import es from 'react-intl/locale-data/es'
import routes from './routes'
import configureStore from './store/configureStore'
import './styles/styles.scss'
import esMessages from './i18n/messages/es'
import enMessages from './i18n/messages/en'

require('./favicon.ico') // Tell webpack to load favicon.ico

addLocaleData([...en, ...es])

// TODO don't use navigator
const locale = navigator.language

let messages = enMessages
if ((locale === 'es') || (locale === 'es-ES')) {
  messages = esMessages
}

const store = configureStore()

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <IntlProvider key="intl" locale={locale} messages={messages}>
      <Router history={history} routes={routes} />
    </IntlProvider>
  </Provider>, document.getElementById('app')
)
