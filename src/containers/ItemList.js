import React from 'react';
import { Item } from '@components/Item';
import { useGetProducts } from '@hooks/useGetProducts';

const API = 'https://api.escuelajs.co/api/v1/products';

const ItemList = () => {
  const products = useGetProducts(API);

  return(
    <section className="main-container">
      <div className="cards-container">
        {products.map((product) => (
          <Item product={product} key={product.id}/>
        ))}
      </div>
    </section>
  )
}

export {ItemList};