import React from 'react';

class Product extends React.Component{
    render(){
        return <div>
            <h2>{this.props.name}</h2>
            <h4>{this.props.price}</h4>
            <img alt="not avail"></img>
        </div>;
    }
}

export default Product;