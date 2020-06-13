import React from 'react';
import {Form, Button, Container} from 'react-bootstrap';
import { FirebaseContext } from '../../firebase';

export default class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {email: '', password: ''};
        
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event){
        this.setState({[event.target.name]: event.target.value});
    }

    onSubmit(){

    }

    render(){
        return (
            <FirebaseContext.Consumer>
                {firebase =>(
                    <div>
                        <h2>Sign Up</h2>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control 
                                    name='email' 
                                    type="email" 
                                    placeholder="Enter email" 
                                    onChange={this.onChange}/>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                    name='password' 
                                    type="password" 
                                    placeholder="Password"
                                    onChange={this.onChange}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Show password" />
                            </Form.Group>
                            <Button 
                                variant="primary" 
                                type="submit" 
                                onSubmit={firebase.doCreateUserWithEmailAndPassword(this.state.email, this.state.password)}>
                                Submit
                            </Button>
                        </Form>
                    </div>
                )}
            </FirebaseContext.Consumer>
        );
    }
}