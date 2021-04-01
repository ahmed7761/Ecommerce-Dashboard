import React, {useState, useEffect} from 'react';
import Header from "../includes/Header";
import {Table} from "react-bootstrap";

const ProductList = () => {

    const [data, setData] = useState([])
    useEffect(async () => {
        let result = await fetch('http://127.0.0.1:8000/api/productlist')
        result = await result.json()
        setData(result)
    })
    return (
        <div>
            <Header />
            <div className="col-sm-8 offset-sm-2">
                <h1>Product List</h1>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Description</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data.map((item) =>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td><img width='80' height='80' src={'http://127.0.0.1:8000/'+item.file_path} /></td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ProductList;
