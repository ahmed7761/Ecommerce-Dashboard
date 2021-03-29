import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'

const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()
    
    async function signup() {

        let item= {name, email, password}
        console.warn(item)
        let result = await fetch('http://127.0.0.1:8000/api/register',{
            method: 'POST',
            headers: {
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            },
            body: JSON.stringify(item)
        })
        result = await result.json();
        console.log('result', result)
        localStorage.setItem("user-info: ", JSON.stringify(result))
        history.push('/add')
    }

    return (
        <div className="col-sm-6 offset-sm-3">
            <h1>User Sign Up</h1>
            <br/>
            <input type="text" value={name} placeholder="Enter Name" onChange={(e) => setName(e.target.value)} className="form-control"/>
            <br/>
            <input type="text" value={email} placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} className="form-control"/>
            <br/>
            <input type="text" value={password} placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} className="form-control"/>
            <br/>
            <button onClick={signup} className="btn btn-primary">Sign Up</button>
        </div>
    );
};

export default Register;
