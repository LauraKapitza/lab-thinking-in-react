import React from 'react';
import SearchBar from './SearchBar.js';
import ProductTable from './ProductTable.js';

class FilterableProductTable extends React.Component {
    state = {

    }

    render() {
        return (
        <div>
            <h1>IronStore</h1>
            <SearchBar />
            <ProductTable products={this.props.products} />
        </div>
        )
    }
}

export default FilterableProductTable;