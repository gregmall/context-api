import React from 'react'
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Header component', () => {
  afterEach(() => cleanup());
  it('renders the Header to the page', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
      expect(asFragment()).toMatchSnapshot();
  });
});
