import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Enter into Student Info System/i);
  expect(linkElement).toBeInTheDocument();
});
