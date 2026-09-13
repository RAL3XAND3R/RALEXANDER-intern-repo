import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import UserList from './src/UserList';

describe('UserList', () => {
  test('should display users returned by the API', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            { id: 1, name: 'Alice' },
            { id: 2, name: 'Bob' },
          ]),
      })
    );

    render(<UserList />);

    await waitFor(() => {
      expect(screen.getByText('Alice')).toBeInTheDocument();
      expect(screen.getByText('Bob')).toBeInTheDocument();
    });

    expect(fetch).toHaveBeenCalledWith('/api/users');
  });
});