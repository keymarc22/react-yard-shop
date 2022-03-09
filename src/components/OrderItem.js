import React from 'react';
import ItemImg from '../assets/bicicleta.jpeg';
import '../styles/OrderItem.scss';

const OrderItem = () => {
  return (
    <div className="shopping-card">
      <figure><img src={ItemImg} alt="bike" /></figure>
      <p>Bike</p>
      <p>$30</p>
    </div>
  )
}

export { OrderItem };