import React, { useContext } from 'react';
import { IconAddToCard } from '@components/Icons';
import { AppContext } from '@context/AppContext';
import '@styles/Item.scss';

const Item = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleClick = item => {
    addToCart(item);
  }

  return(
    <div className="product-card">
      <img src={product.images[0]} alt={product.title} className="product-img" />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product) } >
          <IconAddToCard />
        </figure>
      </div>
    </div>
  )
}

export { Item };