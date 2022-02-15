import React from 'react';
import './List.css';
import Item from '../Item/Item';

export default function List() {
  return (
    <div className="List">
      <Item />
      <Item />
      <Item />
    </div>
  );
}
