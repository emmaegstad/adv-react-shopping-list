import { useItems } from '../../context/ItemContext';
import './Home.css';
import Header from '../../components/Header/Header';
import List from '../../components/List/List';
import Form from '../../components/Form/Form';

export default function Home() {
  const { items, handleAddItem, handleEditItem, handleDeleteItem } = useItems();

  return (
    <div className="Home">
      <Header />
      {items.length > 0 && (
        <List items={items} handleEditItem={handleEditItem} handleDeleteItem={handleDeleteItem} />
      )}
      <Form handleAddItem={handleAddItem} />
    </div>
  );
}
