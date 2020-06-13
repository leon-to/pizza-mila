import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap';

import './Router.css';
import Home from '../home/Home';
import Login from '../login/Login';

export default class Router extends React.Component{
    render(){
        const nav = (
            <Navbar bg="dark" variant='dark'>
              <Navbar.Brand href="#home">PIZZA MILA</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href='/login'>Login</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar>
        );
            
        const swit = (
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          );
      
          const router = (
            <BrowserRouter>
              {nav}
              {swit}
            </BrowserRouter>
          );
      
          return router;
    }
};

