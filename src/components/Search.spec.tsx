import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { act, render, screen, userEvent } from '../../tests/utils';
import { describe, it, expect, vi } from 'vitest';

import Search from './Search';

const mockQueryClient = new QueryClient();

describe('Search component', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    vi.clearAllMocks();
  });

  it('renders', () => {
    render(<Search />);
    expect(screen.getByLabelText(/search github users/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Search GitHub Users/i)).toBeInTheDocument();
  });

  it('submits by typing enter', async () => {
    render(
      <QueryClientProvider client={mockQueryClient}>
        <Search />
      </QueryClientProvider>,
    );

    const useStateSpy = vi.spyOn(React, 'useState');
    const textInput = screen.getByRole('searchbox', { name: /search gitHub users/i });

    await act(async () => userEvent.type(textInput, 'leeeandroo{enter}'));

    expect(useStateSpy).toHaveBeenCalled();
  });

  it('submits by clicking submit', async () => {
    render(
      <QueryClientProvider client={mockQueryClient}>
        <Search />
      </QueryClientProvider>,
    );

    const useStateSpy = vi.spyOn(React, 'useState');
    const submitButton = screen.getByRole('button', { name: /search/i });
    const textInput = screen.getByRole('searchbox', { name: /search gitHub users/i });

    await act(async () => userEvent.type(textInput, 'leeeandroo'));
    await act(async () => userEvent.click(submitButton));

    expect(useStateSpy).toHaveBeenCalled();
  });
});
