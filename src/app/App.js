import React from 'react';

import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import {Nav, Navbar, Form, FormControl, Button, Dropdown, DropdownButton} from 'react-bootstrap';
import {withFirebaseContext} from '../firebase';

import './App.css';

import Home from './home/Home';
import Contact from './contact/Contact';
import {Login, SignUp, Profile} from './user';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {user: null};

    this.onSignOut = this.onSignOut.bind(this);
  }

  componentDidMount(){
    this.listener = this.props.firebase.auth.onAuthStateChanged(user =>{
      this.setState({'user': user})
    });
  }

  onSignOut(){
    this.props.firebase.auth.signOut();
  }

  render(){
    const user = this.state.user;
    const firebase = this.props.firebase;
    return (
      <BrowserRouter>
        <Navbar bg="dark" variant='dark'>
          <i className='fas fa-pizza-slice App-logo'></i>
          <Navbar.Brand href="#home">PIZZA MILA</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
            <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
          </Nav>
          
          
          {user ?
            <DropdownButton title={user.email}>
              <Dropdown.Item as={Link} to='/profile'>Your profile</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={this.onSignOut}>Sign out</Dropdown.Item>
            </DropdownButton>
            :
            <DropdownButton title='Login'>
              <Dropdown.Item as={Link} to='/login'>Login</Dropdown.Item>
              <Dropdown.Item as={Link} to='/signup'>Sign up</Dropdown.Item>
            </DropdownButton>
          }
          
        </Navbar>
        
        <Switch>
          <Route path="/login"><Login /></Route>
          <Route path='/signup'><SignUp /></Route>
          <Route path='/profile'><Profile /></Route>
          <Route path='/contact'><Contact /></Route>
          <Route path="/"><Home /></Route>
      </Switch>
      </BrowserRouter>
    );

  }
}

export default withFirebaseContext(App);