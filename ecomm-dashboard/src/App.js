import logo from './logo.svg';
import './App.css';
import Header from "./components/includes/Header";
import {BrowserRouter, Route} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import AddProduct from "./components/products/AddProduct";
import UpdateProduct from "./components/products/UpdateProduct";
import Protected from "./components/Protected";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/register">
                <Register/>
            </Route>
            <Route path="/add">
                <Protected Cmp={AddProduct} />
            </Route>
            <Route path="/update">
                <Protected Cmp={UpdateProduct} />
            </Route>
        </BrowserRouter>
    </div>
  );
}

export default App;
