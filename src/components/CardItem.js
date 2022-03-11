import React, { useContext } from 'react';
import { IconClose } from '@components/Icons';
import { AppContext } from '@context/AppContext';
import '@styles/CardItem.scss';

const CardItem = ({product}) => {
  const { removeFromCart } = useContext(AppContext);
  return (
    <div className="shopping-card">
      <figure>
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>

      <IconClose action={() => removeFromCart(product)}/>
    </div>
  )
}

export { CardItem };