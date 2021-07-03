import React from 'react';

class SearchBar extends React.Component {
    render() {
        return(
            <div>
                <label>
                    Search
                    <input type='text'></input>
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