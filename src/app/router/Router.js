import React from 'react';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import {Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap';

import './Router.css';
import Home from '../home/Home';
import Login from '../login/Login';
import SignUp from '../signup/SignUp';
import User from '../user/User';

export default class Router extends React.Component{
    render(){
        const nav = (
            <Navbar bg="dark" variant='dark'>
              <Navbar.Brand href="#home">PIZZA MILA</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                <Nav.Link as={Link} to='/signup'>Sign Up</Nav.Link>
                <Nav.Link as={Link} to='/user'>User</Nav.Link>
                {/* <Link to='/home'>Home</Link>
                <Link to='/login'>Login</Link> */}
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
              <Route path='/signup'>
                <SignUp />
              </Route>
              <Route path='/user'>
                <User />
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

