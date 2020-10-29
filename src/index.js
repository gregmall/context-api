import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import { ThemeProvider } from './context/ThemeContext';

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
