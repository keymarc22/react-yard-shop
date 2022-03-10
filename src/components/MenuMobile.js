import React from 'react';
import '@styles/MenuMobile.scss';

const MenuMobile = () => {
  return (
    <div className="mobile-menu">
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
          <li><a href="/" className="email">cloraltkeymar22@gmail.com</a></li>
          <li><a href="/" className="signout">Sign out</a></li>
        </ul>
      </div>
    </div>
  )
}

export { MenuMobile };