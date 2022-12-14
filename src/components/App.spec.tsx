import { render, screen } from '../../tests/utils';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App component', () => {
  it('renders', async () => {
    render(<App />);
    expect(screen.getByText(/user search/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/search github users/i)).toBeInTheDocument();
  });
});
