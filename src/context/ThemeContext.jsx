import React from 'react';
import { useState } from 'react';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [themeType, setThemeType] = useState('dark');

  const toggle = () => {
    setThemeType(oldTheme => {
      if(oldTheme ==='dark') return 'light';
      return 'dark';
    });
  };

  return (
    <ThemeContext.Provider value ={{ themeType, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
