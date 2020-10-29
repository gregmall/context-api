import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import DetailDisplay from './DetailDisplay';
import { getById } from '../../services/getById';
import { MemoryRouter, Route } from 'react-router-dom';
import { ThemeProvider } from '../../context/ThemeContext';

jest.mock('../../services/getById.js');

describe('DetailDisplay component', () => {
  it('display a character after loading', () => {
    getById.mockResolvedValue({
      id: 1,
      name: 'Rick',
      image: 'rick.png',
      status: 'Alive'

    });
    render(
      <ThemeProvider>
        <MemoryRouter initialEntries={['/detail/1']}>
          <Route path="/detail/:id" component={DetailDisplay}/>
        </MemoryRouter>
      </ThemeProvider>
    );

    return waitFor(() => {
      screen.getByText('Name: Rick');
      screen.getByAltText('Rick');
      screen.getByText('Status: Alive');
      
    });

  });
});
