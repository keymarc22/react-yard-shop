import React, { useState } from 'react';
import { Logo } from '@components/Logo';
import { MenuDesktop } from '@components/MenuDesktop';
import '@styles/Navbar.scss';

import imgCard from '@icons/icon_shopping_cart.svg';
import imgMenu from '@icons/icon_menu.svg';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <nav className='navbar'>
      <img src={imgMenu} alt="menu" className="menu" />

      <div className="navbar-left">
        <Logo />
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
          <li className="navbar-email" onClick={handleToggle}>
            cloraltkeymar22@gmail.com
            {toggle && <MenuDesktop />}
          </li>
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