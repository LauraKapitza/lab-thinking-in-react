import React from 'react';

class SearchBar extends React.Component {
    render() {
        return(
            <div className="searchbar">
                <label>
                    <input type='search' name='search' value={this.props.queryValue} onChange={(event) => {this.props.queryHandler(event.target)}} placeholder="Search..."></input>
                </label>
                <label>
                    <input type='checkbox' value={this.props.inStockValue} onChange={event => {this.props.queryHandler(event.target)}}></input>
                    Only show products on stock
                </label>

            </div>
        )
    }
}

export default SearchBar;