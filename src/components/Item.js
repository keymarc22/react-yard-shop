import React, { useState } from 'react';
import { IconAddToCard } from '@components/IconAddToCard';
import '@styles/Item.scss';

const Item = ({ product }) => {
  const [card, setCard] = useState([]);

  const handleCard = () => {
    setCard([]);
  }

  return(
    <div className="product-card">
      <img src={product.images[0]} alt={product.title} className="product-img" />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={handleCard} >
          <IconAddToCard />
        </figure>
      </div>
    </div>
  )
}

export { Item };