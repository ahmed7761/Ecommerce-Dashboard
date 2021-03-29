import logo from './logo.svg';
import './App.css';
import Header from "./components/includes/Header";
import {BrowserRouter, Route} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import AddProduct from "./components/products/AddProduct";
import UpdateProduct from "./components/products/UpdateProduct";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header />
            <h1>Ecommerce Dashboard</h1>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/register">
                <Register/>
            </Route>
            <Route path="/add">
                <AddProduct/>
            </Route>
            <Route path="/update">
                <UpdateProduct/>
            </Route>
        </BrowserRouter>
    </div>
  );
}

export default App;
