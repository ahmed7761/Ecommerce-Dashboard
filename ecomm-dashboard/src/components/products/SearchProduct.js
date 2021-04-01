import React from 'react';
import Header from "../includes/Header";

const SearchProduct = () => {
    return (
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1>Search Product</h1>
                <br/>
                <input type="text" placeholder="Enter Product Name"  className="form-control"/>
                <br/>
                <button className="btn btn-primary">Search Product</button>
            </div>
        </div>
    );
};

export default SearchProduct;
