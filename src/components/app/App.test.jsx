import React from 'react';
import { render, cleanup, screen, waitFor, fireEvent } from '@testing-library/react';
import App from './App';
import { getRickAndMortyApi } from '../../services/getRickAndMortyApi';

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
     render(<App />);

      const button= screen.getByTestId('button');
      const characterList = await screen.findByTestId('characters');

      fireEvent.click(button);

      return waitFor(() => {
        expect(characterList).toHaveClass('style.dark')
      });
   
  });
});
