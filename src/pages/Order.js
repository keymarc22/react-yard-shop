import React from 'react';
import { OrderItem } from '../components/OrderItem';
import { TotalOrderDetail } from '../components/TotalOrderDetail';
import '../styles/Order.scss';

const Order = () => {
  return (
    <div className="order-page">
      <div className="my-order-container">
        <h1 className="title">My order</h1>
        <div className="my-order-content">
          <TotalOrderDetail />

          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
        </div>

      </div>

    </div>
  )
}

export { Order };