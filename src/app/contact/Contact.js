import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap';

export default class Contact extends React.Component{
    render(){
        return (
            <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                    My name is Leon. I am a recent grad from University of Toronto.
                    I have one year of full-stack experience at Imagine Communications.
                    If you wanna hire me, feel free to email me at leonto8020@gmail.com.
                </p>
                <p>
                    <Button variant="primary">Email me</Button>
                </p>
            </Jumbotron>
        );
    }
}