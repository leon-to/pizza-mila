import React, {useContext} from 'react';
import {Form, Button, Container} from 'react-bootstrap';
import { withFirebaseContext, FirebaseContext } from '../../../firebase';

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {email: '', password: '', validated: false};
        
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = event =>{
        this.setState({[event.target.name]: event.target.value});
        console.log(event.target.value);

    }

    onSubmit(event){
        //prevent submit reload
        event.preventDefault();
        
        //turn on form validation
        this.setState({validated: true});
        
        //submit if "good" validation
        const form = event.currentTarget;
        const {email, password} = this.state;
        if (form.checkValidity()){
            this.props.firebase
                .createUserWithEmailAndPassword(email, password)
                .catch(error => {this.setState({error})})
        }
    }

    render(){
        return (
            <div>
                <h2>Sign Up</h2>
                <Form noValidate validated={this.state.validated} onSubmit={this.onSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            name='email' 
                            type="email" 
                            placeholder="Enter email" 
                            onChange={this.onChange}/>
                        <Form.Control.Feedback type="invalid">
                            Please enter a valid email
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            name='password' 
                            type="password" 
                            placeholder="Password"
                            onChange={this.onChange}/>
                    </Form.Group>

                    <Button 
                        variant="primary" 
                        type="submit" >
                        
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default withFirebaseContext(SignUp);