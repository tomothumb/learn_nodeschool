import React from 'react'

export const FilterableProductTable = React.createClass({

    getInitialState () {
        return {
            filterText: '',
            inStockOnly: false
        };
    },
    handleUserInput (filter,stock){
        this.setState({filterText:filter});
        this.setState({inStockOnly:stock});
    },

    render() {

        return (
            <div>
                <SearchBar onChange={this.handleUserInput} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} />
                <ProductTable products={this.props.products} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly}  />
            </div>
        )
    }
});

export const SearchBar = React.createClass({
    handleChange: function() {
        this.props.onChange(
            this.refs.filterTextInput.value,
            this.refs.inStockOnlyInput.checked
        );
    },
    render() {

        return (
            <form action="">
                SEARCH
                <input type="text" ref="filterTextInput" onChange={this.handleChange} value={this.props.filterText} />
                <label for="">
                    <input type="checkbox" ref="inStockOnlyInput" checked={this.props.inStockOnly} onChange={this.handleChange} /> Only show products in stock
                </label>
            </form>
        )
    }
});


export const ProductTable = React.createClass({
    render() {
        //console.log(this.props.products);
        var category;
        var tableData = [];
        var inStockOnly = this.props.inStockOnly;
        var filterText = this.props.filterText;
        this.props.products.map(function(p,idx) {

            if(p.category !== category){
                category = p.category;
                tableData.push((
                    <ProductCategoryRow category={p} key={idx+p.category} />
                ))
            }
            if(p.name.indexOf(filterText) === -1){
                return;
            }
            if(inStockOnly === true){
                if(p.stocked === true){
                    tableData.push((
                        <ProductRow product={p} key={idx+p.name} />
                    ))
                }
            }else{
                tableData.push((
                    <ProductRow product={p} key={idx+p.name} />
                ))
            }
            return;


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


//http://facebook.github.io/react/docs/thinking-in-react.html
//https://github.com/asbjornenge/thinking-in-react/blob/master/exercises%2Fstep_4__identify_where_your_state_should_live%2Fsolution%2Fsolution.js