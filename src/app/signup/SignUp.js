import React, {useContext} from 'react';
import {Form, Button, Container} from 'react-bootstrap';
import { withFirebaseContext, FirebaseContext } from '../../firebase';

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {email: '', password: ''};
        
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = event =>{
        this.setState({[event.target.name]: event.target.value});
        console.log(event.target.value);

    }

    onSubmit(event){
        const {email, password} = this.state;
        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, password)
            .catch(error => {this.setState({error})});
        // console.log('onSubmit');
    }

    render(){
        return (
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
                            {/* ></Form.Control> */}
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            name='password' 
                            type="password" 
                            placeholder="Password"
                            onChange={this.onChange}/>
                            {/* ></Form.Control> */}
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Show password" />
                    </Form.Group>
                    <Button 
                        variant="primary" 
                        type="button" 
                        onClick={this.onSubmit}>
                        
                        Submit
                    </Button>
                </Form>
            </div>
               
            
        );
    }
}

export default withFirebaseContext(SignUp);