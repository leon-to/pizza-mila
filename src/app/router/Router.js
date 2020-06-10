import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Nav, Navbar} from 'react-bootstrap';

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
            <Navbar bg="light" expand="light">
              <Navbar.Brand href="#home">PIZZA MILA</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
              </Nav>
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

