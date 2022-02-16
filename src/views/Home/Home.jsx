import { useReducer } from 'react';
import './Home.css';
import List from '../../components/List/List';
import Form from '../../components/Form/Form';

const initialItems = [
  { id: 0, text: 'Oat Milk', done: false },
  { id: 1, text: 'Parmesan Crisps', done: false },
  { id: 2, text: 'Lacinato Kale', done: false },
];

function itemsReducer(items, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...items,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'edited': {
      return items.map((item) => {
        if (item.id === action.task.id) {
          return action.task;
        }
        return item;
      });
    }
    case 'deleted': {
      return items.filter((item) => item.id !== action.id);
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}

export default function Home() {
  const [items, dispatch] = useReducer(itemsReducer, initialItems);

  const handleAddItem = (text) => {
    dispatch({
      type: 'added',
      id: items.length + 1,
      text,
    });
  };

  const handleEditItem = (task) => {
    dispatch({
      type: 'edited',
      task,
    });
  };

  const handleDeleteItem = (taskId) => {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  };

  return (
    <div className="Home">
      <h1 className="home-title">Grocery List</h1>
      <List items={items} handleEditItem={handleEditItem} handleDeleteItem={handleDeleteItem} />
      <Form handleAddItem={handleAddItem} />
    </div>
  );
}
