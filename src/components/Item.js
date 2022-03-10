import React from 'react';
import { IconAddToCard } from '@components/IconAddToCard';
import itemImg from '@images/bicicleta.jpeg';
import '@styles/Item.scss';

const Item = () => {
  return(
    <div class="product-card">
      <img src={itemImg} alt="item-image" class="product-img" />
      <div className="product-info">
        <div>
          <p>$120.00</p>
          <p>Bike</p>
        </div>
        <figure>
          <IconAddToCard />
        </figure>
      </div>
    </div>
  )
}

export { Item };