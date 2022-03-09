import React from 'react';
import { IconArrowRight } from '../components/IconArrowRight';

const CardDetails = () => {
  return (
    <aside class="product-detail">
      <div class="my-order-content">
        <div class="title-container">
          <IconArrowRight />
          <h1 class="title">Shopping card</h1>
        </div>
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>

      <div class="order">
        <p>
          <span>Total</span>
        </p>
        <p>$560.00</p>
      </div>
      <button class="primary-button add-to-card-button">
        Checkout
      </button>
    </aside>
  )
}

export { CardDetails };