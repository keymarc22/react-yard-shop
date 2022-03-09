import React from 'react';
import '../styles/Navbar.scss';
import imgCard from '../assets/icon_shopping_cart.svg';
import imgMenu from '../assets/icon_menu.svg';
import logo from '../assets/logo_yard_sale.svg';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={imgMenu} alt="menu" className="menu" />

      <div className="navbar-left">
        <img
          src={logo}
          alt="logo"
          className="logo"
        />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email">cloraltkeymar22@gmail.com</li>
          <li className="navbar-shopping-card">
            <img
              src={imgCard}
              alt="shopping-card"
              className="shopping-card"
            />
            <div>2</div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Navbar };