import React from 'react';
import ItemImg from '../assets/bicicleta.jpeg';
import IconClose from '../components/IconClose';
import '../styles/CardItem.scss';

const CardItem = () => {
  return (
    <div class="shopping-card">
      <figure>
        <img src={ItemImg} alt="bike" />
      </figure>
      <p>Bike</p>
      <p>$30</p>
      <IconClose />
    </div>
  )
}

export { CardItem };