import React from 'react';
import './Body.css';
import ProductList from '../home/product/ProductList';

class Body extends React.Component{
    render(){
        const products = [
            {name: "Hotdog Pizza", price:"$9.99", img:"/img/hotdog-pizza.jpg"},
            {name: "Sushi Pizza", price:"$12.99", img:"/img/sushi-pizza.jpg"},
            {name: "Lamb Pizza", price:"$7.99", img:"/img/lamb-pizza.jpg"},
            {name: "Vegan Pizza", price:"$5.99", img:"/img/vegan-pizza.jpg"},
            {name: "Coke", price:"$1.99", img:"/img/coke.jpg"}
        ];

        const body = (
            <div className="body">
                <ProductList products={products} />
            </div>
        );

        return body;
    }
}


export default Body;