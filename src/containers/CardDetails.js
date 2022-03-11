import React, { useContext } from 'react';
import { CardItem } from '@components/CardItem';
import { IconArrowRight } from '@components/Icons';
import { AppContext } from '@context/AppContext';
import '@styles/CardDetail.scss';

const CardDetails = () => {
  const { state } = useContext(AppContext);
  const sumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  }

  return (
    <aside className="product-detail">
      <div className="my-order-content">
        <div className="title-container">
          <IconArrowRight />
          <h1 className="title">Shopping card</h1>
        </div>
        {state.cart.map(product => (
          <CardItem product={product} key={`order-item-${product.id}`}/>
        ))}
      </div>

      <div className="order">
        <p>
          <span>Total</span>
        </p>
        <p>${sumTotal()}</p>
      </div>

      <button className="primary-button add-to-card-button">
        Checkout
      </button>
    </aside>
  )
}

export { CardDetails };