import React from 'react'
import {connect} from 'react-redux'
import {addChord} from '../actions/index.jsx'




class TestContainer extends React.Component{
    constructor(props){
        super(props);
        

    }
    render(){
        console.log(this.props.testDispatch);
       this.props.testDispatch("dispatched");
        return(
                <div>
                <div>{this.props.name}</div>
                </div>
                )
    }
} 

const initialState = {
    name: "null"
}

function mapStatoToProps(state = initialState, props){
    
    return{
        name:state.name
    }
}

const mapDispatchToProps =(dispatch)=> {
            return{
                    testDispatch:(name)=>{
                        console.log("called" + name);
                        dispatch(addChord(name))
                    }
}
    }


export default connect(
       mapStatoToProps,   
        mapDispatchToProps
           
        )(TestContainer);

