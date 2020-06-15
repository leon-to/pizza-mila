import React from 'react';
import {withRouter} from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';
import {compose} from 'recompose';
import {withFirebaseContext} from '../../../firebase';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {validated: false, email: '', password: ''};

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event){
        this.setState({[event.target.name]: event.target.value});
        // console.log(event.target.name, event.target.value)
    }

    onSubmit(event){
        // prevent submit reload
        event.preventDefault();

        // turn on validation
        this.setState({validated: true});
        
        // submit if good validation
        const form = event.target;
        const {email, password} = this.state;
        if (form.checkValidity()){
            this.props.firebase
                .signInWithEmailAndPassword(email, password);
                // .then(() =>{
                //     // this.props.history
                // });

        }
        this.props.history.push('/');
    }

    render(){
        const login = (
            <div>
                <h2>Log in</h2>
                <Form noValidate validated={this.state.validated} onChange={this.onChange} onSubmit={this.onSubmit} >
                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            name="email"
                            type="email" 
                            placeholder="Enter email"/>
                        <Form.Control.Feedback type='invalid'>
                            Please enter a valid email
                        </Form.Control.Feedback>
                    </Form.Group>

            
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            name="password"
                            type="password" 
                            placeholder="Password"/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );

        return login;
    }
}

// export default withFirebaseContext(Login);
export default compose(withRouter, withFirebaseContext)(Login);