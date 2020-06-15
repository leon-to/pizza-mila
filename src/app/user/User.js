import React from 'react';
import {withFirebaseContext} from '../../firebase';

class User extends React.Component{
    constructor(props){
        super(props);

        this.props.firebase.auth.onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
            //   this.state = {email: user.email}
              // ...
            } else {
              // User is signed out.
              // ...
            }
        });
    }
    render(){
        const user = (
            <div>
                <h2>User Info</h2>

            </div>
        );

        return user
    }
}

export default withFirebaseContext(User);