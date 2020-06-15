import React from 'react';
import {withFirebaseContext} from '../../../firebase';

class Profile extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <h2>Still under construction</h2>
        )
    }
}

export default withFirebaseContext(Profile);