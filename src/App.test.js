import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders home title', () => {
  render(<App />);
  const title = screen.getByRole('heading', /grocery list/i);
  expect(title).toBeInTheDocument();
});

test('renders list of items', () => {
  render(<App />);

  const items = screen.getAllByRole('listitem');
  expect(items).toHaveLength(3);
});

test('add button will add new item to list', () => {
  render(<App />);

  const input = screen.getByLabelText(/form input/i);
  userEvent.type(input, 'tater tots');

  const button = screen.getByRole('button', { name: /add \+/i });
  userEvent.click(button);

  expect(screen.getByText(/tater tots/i)).toBeInTheDocument();
});

test('delete button will delete item from list', () => {
  render(<App />);

  const oatMilk = screen.getByText(/oat milk/i);
  const deleteButton = screen.getByTestId('edit-0');
  userEvent.click(deleteButton);

  expect(oatMilk).not.toBeInTheDocument();
});

test('edit button will display edit input and save button', () => {
  render(<App />);

  const editButton = screen.getByTestId('edit-0');
  userEvent.click(editButton);

  const editInput = screen.getByLabelText(/edit input/i);
  expect(editInput).toBeInTheDocument();

  const saveButton = screen.getByTestId('save-0');
  expect(saveButton).toBeInTheDocument();
});

test('save button will update list item', () => {
  render(<App />);
  const editButton = screen.getByTestId('edit-0');
  userEvent.click(editButton);

  const editInput = screen.getByLabelText(/edit input/i);
  userEvent.type(editInput, 'cereal');

  const saveButton = screen.getByTestId('save-0');
  userEvent.click(saveButton);

  expect(screen.getByText(/cereal/i)).toBeInTheDocument();
});

test('clear button will clear all list items', () => {
  render(<App />);
  const oatMilk = screen.getByText(/oat milk/i);
  const parmesanCrisps = screen.getByText(/parmesan crisps/i);
  const lacinatoKale = screen.getByText(/lacinato kale/i);

  const clearButton = screen.getByRole('button', { name: /clear-button/i });
  userEvent.click(clearButton);

  expect(oatMilk).not.toBeInTheDocument();
  expect(parmesanCrisps).not.toBeInTheDocument();
  expect(lacinatoKale).not.toBeInTheDocument();
});
