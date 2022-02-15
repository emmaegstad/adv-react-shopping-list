import { useState } from 'react';
import './Form.css';

export default function Form({ handleAddItem }) {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewItem('');
    handleAddItem(newItem);
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-input"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type="submit" className="form-button">
        Add +
      </button>
    </form>
  );
}
