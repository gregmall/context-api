import React from 'react';
import { render, cleanup, screen, waitFor, fireEvent } from '@testing-library/react';
import App from './App';
import { getRickAndMortyApi } from '../../services/getRickAndMortyApi';
import { ThemeProvider } from '../../context/ThemeContext';

jest.mock('../../services/getRickAndMortyApi.js');

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App and changes theme', async() => {

    getRickAndMortyApi.mockResolvedValue([
      {
        'id': '1',
        'name': 'Rick Sanchez',
        'image': 'https://rickandmortyapi.com/api/location/1'
      }
    ]);
     render(
        <ThemeProvider>
            <App />
        </ThemeProvider>
      );

      const button= screen.getByTestId('button');
      const characterList = await screen.findByTestId('characters');

      fireEvent.click(button);

      await waitFor(() => {
        expect(characterList).toHaveClass('light')
      });

      fireEvent.click(button);

      return waitFor(() => {
        expect(characterList).toHaveClass('dark')
      });
   
  });
});
