import React from 'react';
import { IconArrowRight } from '@components/Icons';
import { TotalOrderDetail } from '@components/TotalOrderDetail';
import '@styles/MyOrders.scss';

const MyOrders = () => {
  return (
    <div className="my-orders">
      <div className="my-order-container">
        <h1 className="title">My orders</h1>
        <div className="my-order-content">
          <TotalOrderDetail img={<IconArrowRight /> } />
          <TotalOrderDetail img={<IconArrowRight /> } />
          <TotalOrderDetail img={<IconArrowRight /> } />
          <TotalOrderDetail img={<IconArrowRight /> } />
          <TotalOrderDetail img={<IconArrowRight /> } />
        </div>

      </div>
    </div>
  )
}

export { MyOrders };