import React from 'react';

class SearchBar extends React.Component {
    render() {
        return(
            <div>
                <label>
                    Search
                    <input type='search' name='search' value={this.props.queryValue} onChange={(event) => {this.props.queryHandler(event.target.value)}}></input>
                </label>
                <label>
                    <input type='checkbox'></input>
                    Only show products on stock
                </label>

            </div>
        )
    }
}

export default SearchBar;