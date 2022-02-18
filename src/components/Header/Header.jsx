import React from 'react';
import './Header.css';
import { useItems } from '../../context/ItemContext';

export default function Header() {
  const { items, handleClearAll } = useItems();

  return (
    <div className="Header">
      <h1 className="header-title">Grocery List</h1>
      <span className="header-count">You need {items.length} items!</span>
      <button aria-label="clear-button" className="header-clear" onClick={handleClearAll}>
        Clear All
      </button>
    </div>
  );
}
