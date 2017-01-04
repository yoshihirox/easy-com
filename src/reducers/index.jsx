import {combineReducers} from 'redux'
import {ADD_CHORD} from '../actions/index.jsx'


const chord = (state, action) =>{
    switch (action.type){
        case 'ADD_CHORD' :
            console.log("changeing")
            return{
                name:action.name
            }
    }
}



export default chord



