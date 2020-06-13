import React from 'react';
import {Form, Button} from 'react-bootstrap';
import {FirebaseContext, Firebase} from '../../firebase';

export default class Login extends React.Component{
    render(){
        const login = (
            <FirebaseContext.Consumer>
                {firebase => (
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Show password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                )}
            </FirebaseContext.Consumer>
        );

        return login;
    }
}