  import React from 'react';
import { render } from '@testing-library/react';
import CharacterList from './CharacterList';
import { ThemeProvider } from '../../context/ThemeContext';

describe('List Component', () => {
  const characters = [{ name: 'rick', image: 'www.url.com' }, { name: 'morty', image: 'www.page.com' }];

  it('renders List component', () => {
    const { asFragment } = render(<ThemeProvider><CharacterList characters={characters} /> </ThemeProvider>);

    expect(asFragment()).toMatchSnapshot();
  });
});
