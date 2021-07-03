import React from 'react';
import SearchBar from './SearchBar.js';
import ProductTable from './ProductTable.js';

class FilterableProductTable extends React.Component {
    state = {
        products: this.props.products,
        query: ''
    }

    handleQuery = (event) => {
        console.log(event)
        this.setState({
            query: event
        })
    }

    render() {
        const filteredProducts = this.state.products.filter(element => element.name.includes(this.state.query))
        return (
        <div>
            <h1>IronStore</h1>
            <SearchBar queryValue={this.state.query} queryHandler={this.handleQuery}/>
            <ProductTable products={filteredProducts} />
        </div>
        )
    }
}

export default FilterableProductTable;