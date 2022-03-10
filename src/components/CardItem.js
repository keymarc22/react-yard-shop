import React from 'react';
import IconClose from '@components/IconClose';
import ItemImg from '@images/bicicleta.jpeg';
import '@styles/CardItem.scss';

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