import React, { useState } from 'react';
import { IconAddToCard } from '@components/IconAddToCard';
import '@styles/Item.scss';

const Item = (props) => {
  const [card, setCard] = useState([]);

  const handleCard = () => {
    setCard([]);
  }

  return(
    <div className="product-card">
      <img src={props.image} alt="item-image" className="product-img" />
      <div className="product-info">
        <div>
          <p>${props.price}</p>
          <p>{props.title}</p>
        </div>
        <figure onClick={handleCard} >
          <IconAddToCard />
        </figure>
      </div>
    </div>
  )
}

export { Item };