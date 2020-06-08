import React from 'react';
import logo from './logo.svg';
import ProductList from './product/ProductList';
import './App.css';




class App extends React.Component {
  // var l = [
  //   new Product('Hotdog Pizza', 'n/a'),
  //   new Product('Garlic Pizza', 'n/a')
  // ];
  // l[0] = new Product('Hotdog Pizza', 'n/a');
  render(){
    return <ProductList products="['a', 'b']"></ProductList>;
  }
}

export default App;
