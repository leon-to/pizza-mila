import React from 'react';
import Firebase from './Firebase';

const FirebaseContext = React.createContext(null);
const withFirebaseContext = Component => props => (
    <FirebaseContext.Consumer>
        {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
);

export {FirebaseContext, withFirebaseContext};