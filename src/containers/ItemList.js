import React, { useState, useEffect } from 'react';
import { Item } from '@components/Item';
import axios from 'axios';

const API = 'https://api.escuelajs.co/api/v1/products';

const ItemList = () => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const response = await axios(API);
    setProducts(response.data);
  }, [])

  return(
    <section className="main-container">
      <div className="cards-container">
        {products.map((product) => (
          <Item price={product.price} title={product.title} key={product.id} image={product.images[0]}/>
        ))}
      </div>
    </section>
  )
}

export {ItemList};