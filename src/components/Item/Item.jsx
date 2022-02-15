import { useState } from 'react';
import './Item.css';

export default function Item({ item, handleEditItem, handleDeleteItem }) {
  const [isEditing, setIsEditing] = useState(false);
  let itemContent;

  if (isEditing) {
    itemContent = (
      <>
        <input
          value={item.text}
          onChange={(e) => {
            handleEditItem({
              ...item,
              text: e.target.value,
            });
          }}
        />
        <button className="item-save" onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    itemContent = (
      <>
        <p className="item-text">{item.text}</p>
        <button className="item-edit" onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }

  return (
    <div className="Item">
      <input type="checkbox" />
      {itemContent}
      <button className="item-delete" onClick={() => handleDeleteItem(item.id)}>
        Delete
      </button>
    </div>
  );
}
