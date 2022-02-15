import React from 'react';
import './Item.css';

export default function Item({ item }) {
  return (
    <div className="Item">
      <input type="checkbox" />
      <p className="item-text">{item.text}</p>
      <button className="item-edit">Edit</button>
      <button className="item-delete">Delete</button>
    </div>
  );
}
