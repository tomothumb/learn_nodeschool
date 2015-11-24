import React from 'react'

export const FilterableProductTable = React.createClass({
    render() {
        return (
            <div>
                <SearchBar />
                <ProductTable products={this.props.products} />
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


export const ProductTable = React.createClass({
    render() {
        var category;
        var tableData = [];
        this.props.products.map(function(p,idx) {
            if(p.category !== category){
                category = p.category;
                tableData.push((
                    <ProductCategoryRow category={p} key={idx+p.category} />
                ))
            }
            tableData.push((
                <ProductRow product={p} key={idx+p.name} />
            ))
        });

        return (
            <table>
                <tbody>
                {tableData}
                </tbody>
            </table>
        )
    }
});


export const ProductCategoryRow = React.createClass({
    render() {
        return (
            <tr>
                <td colSpan={2}>{this.props.category.category}</td>
            </tr>
        )
    }
});


export const ProductRow = React.createClass({
    render() {
        const product = this.props.product;

        const style = {
            color: (product.stocked ? null : 'red')
        };

        return (
            <tr>
                <td style={style}>{product.name}</td>
                <td style={style}>{product.price}</td>
            </tr>
        )
    }
});
