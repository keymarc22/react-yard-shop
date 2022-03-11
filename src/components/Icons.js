import React from 'react';
import addToCart from '@icons/bt_add_to_cart.svg';
import ArrowIcon from '@icons/flechita.svg';
import closeIcon from '@icons/icon_close.png';
import cardIcon from '@icons/icon_shopping_cart.svg';
import menuIcon from '@icons/icon_menu.svg';
import email from '@icons/email.svg';

const IconAddToCard = () => {
  return (
    <img src={addToCart} alt="add-to-card" className="add-to-card" />
  )
}

const IconArrowRight = () => {
  return (
    <img 
      src={ArrowIcon}
      alt="arrow"
      className="arrow" 
    />
  )
}

const IconClose = ({action}) => {
  return (
    <img 
      src={closeIcon}
      alt='close'
      className='close'
      onClick={action}
    />
  )
}

const MenuIcon = () => {
  return (
    <img 
      src={menuIcon}
      alt="menu"
      className="menu"
    />
  )
}

const CardIcon = () => {
  return (
    <img
      src={cardIcon}
      alt="shopping-card"
      className="shopping-card"
    />
  )
}

const EmailIcon = () => {
  return (
    <img src={email} alt="email" className="email-icon" />
  )
}

export { IconAddToCard, IconArrowRight, IconClose, MenuIcon, CardIcon, EmailIcon };