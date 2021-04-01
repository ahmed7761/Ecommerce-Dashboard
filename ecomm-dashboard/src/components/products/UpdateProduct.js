import React, {useEffect, useState} from 'react';
import Header from "../includes/Header";
import {withRouter} from 'react-router-dom'

const UpdateProduct = (props) => {

    const [data, setData] = useState([])
    useEffect( async () => {
        let result = await fetch('http://127.0.0.1:8000/api/product/'+props.match.params.id)
        result = await result.json()
        setData(result)
    },[])

    return (
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1>Update Product</h1>
                <br/>
                <input type="text" defaultValue={data.name} placeholder="Enter Product Name" className="form-control"/>
                <br/>
                <input type="text" defaultValue={data.price} placeholder="Enter Product Price" className="form-control"/>
                <br/>
                <input type="text" defaultValue={data.description} placeholder="Enter Product Description" className="form-control"/>
                <br/>
                <input type="file" defaultValue={data.file_path}  className="form-control"/>
                <br/>
                <img width='80' height='80' src={'http://127.0.0.1:8000/'+data.file_path} />
                <br /> <br />
                <button className="btn btn-primary">Update Product</button>
            </div>
        </div>
    );
};

export default withRouter(UpdateProduct);
