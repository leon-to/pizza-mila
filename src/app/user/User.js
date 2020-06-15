import React from 'react';
import {Spinner} from 'react-bootstrap';
import {withFirebaseContext} from '../../firebase';

class User extends React.Component{
    constructor(props){
        super(props);

        this.state = {user: null};
    }

    componentDidMount(){
        this.props.firebase.auth.onAuthStateChanged(user => {
            this.setState({'user': user})
        });
    }
    render(){
        const user = (
            
            <div>
                <h2>User Info</h2>
                {this.state.user ? 
                    <div>
                        <div>{this.state.user.email}</div>
                    </div>
                    : 
                    <Spinner animation="grow" />
                }
            </div>
        );

        return user
    }
}

export default withFirebaseContext(User);