import React from 'react';
import { IconArrowRight } from '@components/IconArrowRight';

const CardDetails = () => {
  return (
    <aside className="product-detail">
      <div className="my-order-content">
        <div className="title-container">
          <IconArrowRight />
          <h1 className="title">Shopping card</h1>
        </div>
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>

      <div className="order">
        <p>
          <span>Total</span>
        </p>
        <p>$560.00</p>
      </div>
      <button className="primary-button add-to-card-button">
        Checkout
      </button>
    </aside>
  )
}

export { CardDetails };