import React from 'react';

const TotalOrderDetail = (props) => {
  return (
    <div className="order">
      <p>
        <span>12.11.2021</span>
        <span>6 articles</span>
      </p>
      <p>$560.00</p>
      {props.img}
    </div>
  )
}

export { TotalOrderDetail };