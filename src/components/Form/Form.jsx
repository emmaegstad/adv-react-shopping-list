import React from 'react';
import './Form.css';

export default function Form() {
  return (
    <form className="Form">
      <input type="text" className="form-input" />
      <button type="submit" className="form-button">
        Add Item
      </button>
    </form>
  );
}
