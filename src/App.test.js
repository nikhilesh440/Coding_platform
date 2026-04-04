import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders app heading', () => {
  render(<App />);
  const element = screen.getByText(/welcome/i);
  expect(element).toBeInTheDocument();
});