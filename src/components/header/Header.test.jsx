import React from 'react'
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';
import { ThemeProvider } from '../../context/ThemeContext';

describe('Header component', () => {
  afterEach(() => cleanup());
  it('renders the Header to the page', () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    
    );
      expect(asFragment()).toMatchSnapshot();
  });
});
