import React, { useState, useContext } from 'react';
import { Logo } from '@components/Logo';
import { MenuDesktop } from '@components/MenuDesktop';
import { MenuIcon, CardIcon } from '@components/Icons';
import { CardDetails } from '@containers/CardDetails';
import { AppContext } from '@context/AppContext';

import '@styles/Navbar.scss';

const Navbar = () => {
  const { state } = useContext(AppContext);
  const [toggleOrder, setToggleOrder] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <nav className='navbar'>
      <MenuIcon />

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
          <li
            className="navbar-shopping-card"
            onClick={()=> {setToggleOrder(!toggleOrder)}}
          >
            <CardIcon />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggleOrder && <CardDetails />}
    </nav>
  );
}

export { Navbar };