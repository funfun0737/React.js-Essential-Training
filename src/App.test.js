import { render, screen } from '@testing-library/react';
import RestaurantApp from './RestaurantApp';

test('renders learn react link', () => {
  render(<RestaurantApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
