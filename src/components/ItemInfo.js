import React from 'react';
import ItemImg from '../assets/bicicleta.jpeg';
import IconAddToCard from '../components/IconAddToCard';

const ItemInfo = () => {
  return (
    <React.Fragment>
      <img src={ItemImg} alt="bike" className="bike" />
      <div className="product-info">
        <p>$35.00</p>
        <p>Bike</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Cum perferendis quia recusandae culpa natus possimus veniam eaque nihil? 
          Molestiae facere magni quia, alias maiores quas ducimus dolore illo impedit asperiores.</p>
        <button className="primary-button add-to-card-button">
          <IconAddToCard />
          Add to Card
        </button>
      </div>
    </React.Fragment>
  )
}

export { ItemInfo };