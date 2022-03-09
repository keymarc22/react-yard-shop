import React from 'react';
import '../styles/Item.scss';
import addItemImg from '../assets/bt_add_to_cart.svg';
import itemImg from '../assets/bicicleta.jpeg';

const Item = () => {
  return(
    <div class="product-card">
      <img src={itemImg} alt="item-image" class="product-img" />
      <div className="product-info">
        <div>
          <p>$120.00</p>
          <p>Bike</p>
        </div>
        <figure>
          <img src={addItemImg} alt="addItem" className='addItem' />
        </figure>
      </div>
    </div>
  )
}

export { Item };