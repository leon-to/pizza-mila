import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './header/Header';
// import Body from './body/Body';
// import Sidebar from './sidebar/Sidebar';



class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
