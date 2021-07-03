import React from 'react';
import ProductRow from './ProductRow.js'

class ProductTable extends React.Component {
    render() {
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
                        this.props.products.map(product => {
                            return <ProductRow key={product.id} {...product} />
                        })
                    }
                </tbody>
            </table>
        ) 
    }
}

export default ProductTable;