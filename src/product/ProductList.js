import Product from './Product';
import React from 'react';


class ProductList extends React.Component {
    render() {
        return <h1>{this.props.products}</h1>;
    }
}

export default ProductList;