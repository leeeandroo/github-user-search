import { render, screen } from '../../tests/utils';
import { describe, it, expect } from 'vitest';
import Header from './Header';

describe('Header component', () => {
  it('renders', async () => {
    render(<Header />);
    expect(screen.getByText(/user search/i)).toBeInTheDocument();
  });
});
