import React from 'react';
import './Item.css';

export default function Item() {
  return (
    <div className="Item">
      <input type="checkbox" />
      <p className="item-text">Item</p>
      <button className="item-edit">Edit</button>
      <button className="item-delete">Delete</button>
    </div>
  );
}
