import React from 'react';
import './Header.css';
import { useItems } from '../../context/ItemContext';

export default function Header() {
  const { items, handleClearAll } = useItems();

  const handleClear = (items) => {
    handleClearAll(items);
  };
  return (
    <div className="Header">
      <h1 className="header-title">Grocery List</h1>
      <span className="header-count">You need {items.length} items!</span>
      <button className="header-clear" onClick={() => handleClear(items)}>
        Clear All
      </button>
    </div>
  );
}
