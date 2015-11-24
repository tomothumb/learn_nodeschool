import React from 'react'

export const FilterableProductTable = React.createClass({
    render() {
        return (
            <div>
                <SearchBar />
            </div>
        )
    }
});

export const SearchBar = React.createClass({
    render() {
        return (
            <form action="">
                SEARCH
                <input type="text" />
                <label for="">
                    <input type="checkbox" /> Only show products in stock
                </label>
            </form>
        )
    }
});