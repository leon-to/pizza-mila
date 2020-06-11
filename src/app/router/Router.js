import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap';

import './Router.css';
import Home from '../../home/Home';


export default class Router extends React.Component{
    render(){
        const nav = (
            // <div className="nav">
            //     <img className="nav-logo" src="img/pizza-mila-logo.jpg"/>
            //     <Link to="/" className="nav-home">Home</Link>
            //     <div className="nav-news">News</div>
            //     <div className="nav-login">Login</div>
            // </div>
            <Navbar bg="dark" variant='dark'>
              <Navbar.Brand href="#home">PIZZA MILA</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar>
        );
            
        const swit = (
            <Switch>
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

