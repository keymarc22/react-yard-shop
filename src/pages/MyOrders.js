import React from 'react';
import { IconArrowRight } from '../components/IconArrowRight';
import { TotalOrderDetail } from '../components/TotalOrderDetail';
import '../styles/MyOrders.scss';

const MyOrders = () => {
  return (
    <div class="my-orders">
      <div class="my-order-container">
        <h1 class="title">My orders</h1>
        <div class="my-order-content">
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