import { useState } from 'react';
import './Item.css';

export default function Item({ item, handleEditItem, handleDeleteItem }) {
  const [isEditing, setIsEditing] = useState(false);
  let itemContent;

  if (isEditing) {
    itemContent = (
      <>
        <label className="edit-input-label" htmlFor="edit-input">
          Edit Input
        </label>
        <input
          id="edit-input"
          value={item.text}
          onChange={(e) => {
            handleEditItem({
              ...item,
              text: e.target.value,
            });
          }}
        />
        <button
          className="item-save"
          data-testid={`save-${item.id}`}
          onClick={() => setIsEditing(false)}
        >
          Save
        </button>
      </>
    );
  } else {
    itemContent = (
      <>
        <p className="item-text" style={{ textDecoration: item.done ? 'line-through' : null }}>
          {item.text}
        </p>
        <button
          className="item-edit"
          data-testid={`edit-${item.id}`}
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
      </>
    );
  }

  return (
    <li className="Item">
      <input
        type="checkbox"
        checked={item.done}
        onChange={(e) => {
          handleEditItem({
            ...item,
            done: e.target.checked,
          });
        }}
      />
      {itemContent}
      <button
        className="item-delete"
        data-testid={item.id}
        onClick={() => handleDeleteItem(item.id)}
      >
        Delete
      </button>
    </li>
  );
}
