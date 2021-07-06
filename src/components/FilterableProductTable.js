import React from 'react';
import SearchBar from './SearchBar.js';
import ProductTable from './ProductTable.js';

class FilterableProductTable extends React.Component {
    state = {
        products: this.props.products,
        query: '',
        inStock: false
    }

    handleQuery = (event) => {
        console.log(event)
        if(event.type === 'checkbox') {
            this.setState(prevState => ({
                inStock: !prevState.inStock
              }));
        } else if (event.type === 'search') {
            this.setState({
                query: event.value
            })
        }
    }

    render() {
        const filteredProducts = this.state.products.filter(element => element.name.includes(this.state.query))
        return (
        <div>
            <h1>IronStore</h1>
            <SearchBar queryValue={this.state.query} inStockValue={this.state.inStock} queryHandler={this.handleQuery}/>
            {this.state.inStock && <ProductTable products={filteredProducts.filter(element => element.stocked === true )} /> }    
            {!this.state.inStock && <ProductTable products={filteredProducts} /> }
        </div>
        )
    }
}

export default FilterableProductTable;