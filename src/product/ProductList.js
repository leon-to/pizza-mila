import Product from './Product';
import React from 'react';


class ProductList extends React.Component {
    render() {
        return (
            <div>
                {this.props.products.map(product =>
                    <Product name={product.name} price={product.price} img={product.img}/>
                )}
            </div>
        );
    }
}

export default ProductList;