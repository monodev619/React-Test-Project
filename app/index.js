/**
 * Created by admin on 09/10/2016.
 */
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {Router, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import {Provider} from 'react-redux'

import route from './route'
import configureStore from './store/configStore'

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>{route}</Router>
    </Provider>,
    document.getElementById('root')
)
