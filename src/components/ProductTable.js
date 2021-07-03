import React from 'react';
import ProductRow from './ProductRow.js'

class ProductTable extends React.Component {
    render() {
        const products = this.props.products.slice()
        return(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => {
                            return <ProductRow key={product.id} {...product} />
                        })
                    }
                </tbody>
            </table>
        ) 
    }
}

export default ProductTable;