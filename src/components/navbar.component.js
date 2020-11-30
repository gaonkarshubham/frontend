import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./scm.css";

export class Navbar extends Component {
  render() {
    const role = sessionStorage.getItem("role");
    console.log(role);
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg nevbar-specification">
        <div className="navbar-br">REFLECT</div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/createUser" className="nav-link">
                Create User
              </Link>
            </li>
            <li className="navbar-item colorr">
              <Link to="/createProduct" className="nav-link">
                Create Product
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/users" className="nav-link">
                Users
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/products" className="nav-link">
                Products
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Sign in / Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
