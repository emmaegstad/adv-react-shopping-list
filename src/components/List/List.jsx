import React from 'react';
import './List.css';
import Item from '../Item/Item';

export default function List({ items, handleEditItem, handleDeleteItem }) {
  return (
    <ul className="List">
      {items.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            handleEditItem={handleEditItem}
            handleDeleteItem={handleDeleteItem}
          />
        );
      })}
    </ul>
  );
}
