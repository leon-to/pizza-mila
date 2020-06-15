import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

//TODO: move to env variables
const firebase_config = {
    apiKey: "AIzaSyCkLHhK51gbcgc032hC48TCAALp5xIMRjc",
    authDomain: "pizza-mila.firebaseapp.com",
    databaseURL: "https://pizza-mila.firebaseio.com",
    projectId: "pizza-mila",
    storageBucket: "pizza-mila.appspot.com",
    messagingSenderId: "204140606698",
    appId: "1:204140606698:web:9f3572e68e70dacb2a5393"
};


export default class Firebase{
    constructor(){
        app.initializeApp(firebase_config);
        this.auth = app.auth();
    }


    createUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    signInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    signOut = () => this.auth.signOut();
}

