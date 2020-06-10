import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";


import './Router.css';
import Home from '../../home/Home';

export default class Router extends React.Component{
    render(){
        const nav = (
            <div className="nav">
                <img className="nav-logo" src="img/pizza-mila-logo.jpg"/>
                <Link to="/" className="nav-home">Home</Link>
                <div className="nav-news">News</div>
                <div className="nav-login">Login</div>
            </div>
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

