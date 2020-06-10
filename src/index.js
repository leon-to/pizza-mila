import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';

const products = [
  {name: "Hotdog Pizza", price:"$9.99", img:"/img/hotdog-pizza.jpg"},
  {name: "Sushi Pizza", price:"$12.99", img:"/img/sushi-pizza.jpg"},
  {name: "Lamb Pizza", price:"$7.99", img:"/img/lamb-pizza.jpg"},
  {name: "Vegan Pizza", price:"$5.99", img:"/img/vegan-pizza.jpg"},
  {name: "Coke", price:"$1.99", img:"/img/coke.jpg"}
]

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // <Product name="Hotdog Pizza" price="$9.99" img="/img/hotdog-pizza.jpg"/>,
  // <ProductList products={products} />,
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
