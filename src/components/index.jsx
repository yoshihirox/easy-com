import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, hashHistory } from 'react-router'

import routes from './routes.jsx'

ReactDOM.render((
        <Router history={hashHistory} routes={routes} />
        ),document.getElementById('root') )
