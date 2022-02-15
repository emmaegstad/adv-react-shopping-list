import React from 'react';
import './List.css';
import Item from '../Item/Item';

export default function List({ items, handleEditItem }) {
  return (
    <div className="List">
      {items.map((item) => {
        return <Item key={item.id} item={item} handleEditItem={handleEditItem} />;
      })}
    </div>
  );
}
