import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'

import { Provider } from 'react-redux'
import { Router, hashHistory } from 'react-router'

import chord from '../reducers/index.jsx'

import routes from './routes.jsx'


const store = createStore(chord)


    ReactDOM.render((
                <Provider store={store}>
                <Router history={hashHistory} routes={routes} />
                </Provider>
                ),document.getElementById('root')
            )
