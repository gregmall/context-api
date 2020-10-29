import React from 'react';
import { render } from '@testing-library/react';
import Character from './Character';

describe('Character component', () => {
  it('renders Character component', () => {
    const { asFragment } = render(<Character name="rick" image="www.url.com" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
