import React from 'react';

import Product from './Product';
import './ProductList.css';

class ProductList extends React.Component {
    render() {
        return (
            <div className="ProductList">
                {this.props.products.map(product =>
                    <Product product={product}/>
                )}
            </div>
        );
    }
}

export default ProductList;