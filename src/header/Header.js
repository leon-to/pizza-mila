import React from 'react';
import './Header.css';

class Header extends React.Component{
    render(){
        const logo = <img className="logo" src="img/pizza-mila-logo.jpg"/>;
        
        const nav = (
            <div className="nav">
                <div className="nav-home">Home</div>
                <div className="nav-news">News</div>
            </div>
        );

        const login = (
            <div className="login">
                Login
            </div>
        );

        const header = (
            <div className="header">
                {logo}
                {nav}
                {login}
            </div>
        );

        return header;
    }
}

export default Header;