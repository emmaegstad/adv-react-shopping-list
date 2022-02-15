import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders home title', () => {
  render(<App />);
  const title = screen.getByRole('heading', /grocery list/i);
  expect(title).toBeInTheDocument();
});
