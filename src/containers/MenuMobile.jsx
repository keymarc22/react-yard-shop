import React from 'react';
import '../styles/MenuMobile.scss';

const MenuMobile = () => {
  return (
    <div class="mobile-menu">
      <div>
        <ul>
          <li>
            <a href="/">
              CATEGORIES
            </a>
          </li>
          <li>
            <a href="/">
              All
            </a>
          </li>
          <li>
            <a href="/">
              Clothes
            </a>
          </li>
          <li>
            <a href="/">
              Electronics
            </a>
          </li>
          <li>
            <a href="/">
              Furnitures
            </a>
          </li>
          <li>
            <a href="/">
              Toys
            </a>
          </li>
          <li>
            <a href="/">
              Others
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <a href="/">
              My orders
            </a>
          </li>
          <li>
            <a href="/">
              My account
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li><a href="/" class="email">cloraltkeymar22@gmail.com</a></li>
          <li><a href="/" class="signout">Sign out</a></li>
        </ul>
      </div>
    </div>
  );
}

export default MenuMobile;