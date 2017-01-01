import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router, hashHistory} from 'react-router'

import routes from './routes.jsx'

console.log("hello bundle");

export default class App extends Component{
    render(){
        return(
                <div>
                    hello app
                </div>
                )
    }
}

