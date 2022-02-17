import { useItems } from '../../context/ItemContext';
import './Home.css';
import List from '../../components/List/List';
import Form from '../../components/Form/Form';

export default function Home() {
  const { items, handleAddItem, handleEditItem, handleDeleteItem } = useItems();

  return (
    <div className="Home">
      <h1 className="home-title">Grocery List</h1>
      <List items={items} handleEditItem={handleEditItem} handleDeleteItem={handleDeleteItem} />
      <Form handleAddItem={handleAddItem} />
    </div>
  );
}
