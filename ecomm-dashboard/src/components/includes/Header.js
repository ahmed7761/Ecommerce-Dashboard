import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {Link, useHistory} from "react-router-dom";

const Header = () => {
    const history = useHistory()
    const user = JSON.parse(localStorage.getItem('user-info'));
    function logout() {
        localStorage.clear()
        history.push('/register')
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>Navbar</Navbar.Brand>
                <Nav className="mr-auto nav-bar-wrapper">
                    {
                        localStorage.getItem('user-info') ?
                            <>
                                <Link to="/add">Add Product</Link>
                                <Link to="/update">Update Product</Link>
                            </>
                            :
                            <>
                                <Link to="/login">Login</Link>
                                <Link to="/register">Register</Link>
                            </>
                    }
                </Nav>
                {
                    localStorage.getItem('user-info') ?
                        <Nav className="pr-5">
                            <NavDropdown title={user && user.name} className="pr-5">
                                <NavDropdown.Item onClick={logout} >Logout</NavDropdown.Item>
                                <NavDropdown.Item>Profile</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        : null
                }

            </Navbar>
        </div>
    );
};

export default Header;
