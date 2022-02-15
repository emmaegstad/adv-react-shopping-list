import React from 'react';
import './Home.css';
import List from '../../components/List/List';
import Form from '../../components/Form/Form';

export default function Home() {
  return (
    <div className="Home">
      <List />
      <Form />
    </div>
  );
}
