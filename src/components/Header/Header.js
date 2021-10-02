// Header component 
import React from 'react';
import img from '../../images/logo.png'
import './Header.css'
 
//Header component run
const Header = (props) => {
  return (
    <div className='header'>
      <img src={img} alt="" />
      <nav className='nav'>
        <a href="/home">Shop </a>
        <a href="/orders">Order Review</a>
        <a href="/inventory">Manage Inventory here</a>
      </nav>
      <div className="input-conteiner">   
      <input onChange={props.fnc} type="text" placeholder="Search Your items " />
      </div>
      <p>{props.len}</p>

    </div>
  );
};

export default Header;