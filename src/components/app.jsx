import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router, hashHistory} from 'react-router'

import routes from './routes.jsx'


//material_ui lib
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
//material ui component
import RaisedButton from 'material-ui/RaisedButton';

//import component
import ChordCard from './ChordCard.jsx';
import TestContainer from '../containers/testRedux.jsx'


console.log("hello bundle");
injectTapEventPlugin();

const style ={
    margin: 12,
};

export default class App extends Component{
    render(){
        return(
                <MuiThemeProvider>
                <div>
                    <RaisedButton label="add new chord" style={style} /> 
                    <ChordCard />
                    <TestContainer />
                </div>
                </MuiThemeProvider>
                )
    }
}

