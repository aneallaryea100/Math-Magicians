/* eslint-disable react/function-component-definition */
import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <div className="navholder">
    <h1 className="headText">Math Magicians</h1>
    <ul className="ulTag">
      <NavLink to="/" className="nav">Home</NavLink>
      <NavLink to="/calculator" className="nav">Calculator</NavLink>
      <NavLink to="/Qoutes" className="nav">Qoutes</NavLink>
    </ul>
  </div>
);

export default NavBar;
