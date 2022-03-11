import React from 'react';
import IconClose from '@components/Icons';
import ItemInfo from '@components/ItemInfo';
import '@styles/ItemDetail.scss';

const ItemDetail = () => {
  return (
    <aside className="product-detail">
      <div className="product-detail-close">
        <IconClose />
      </div>
      <ItemInfo />
    </aside>
  )
}

export { ItemDetail }