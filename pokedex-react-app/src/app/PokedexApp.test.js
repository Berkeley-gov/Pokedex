import { render, screen } from '@testing-library/react';
import PokedexApp from './PokedexApp';

test('renders learn react link', () => {
  render(<PokedexApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
