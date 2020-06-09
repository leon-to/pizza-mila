import React from 'react';
import './Product.css';

class Product extends React.Component{
    render(){
        return (
            <div className="Product">
                <div className="Product-name">{this.props.product.name}</div>
                <div className="Product-price">{this.props.product.price}</div>
                <img className="Product-img" src={this.props.product.img}></img>
            </div>
        );
    }
}

export default Product;