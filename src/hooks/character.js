import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { getRickAndMortyApi } from '../services/getRickAndMortyApi';
import { getById } from '../services/getById';

export const useCharacters = page => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);


  useEffect(() => {
    getRickAndMortyApi(page)
    .then(returnedCharacters => setCharacters(returnedCharacters))
    .finally(() => setLoading(false));
  }, [page]);
  
  return {
    loading,
    characters
   
  };
};
export const useTheme = () => {
  const [theme, setTheme] = useState();
  const themeType = useThemeType();
  const serviceMap ={
    dark: dark,
    light: light
  }

  useEffect(() => {
    serviceMap[themeType]()
    .then(theme => setTheme(theme));
  }, [theme]);

  return theme;

};
export const useThemeType = () => {
    const { themeType } = useContext(ThemeContext)
    return themeType;

  };
export const useThemeToggle = () => {
    const  { toggle } = useContext(ThemeContext);
    return toggle;
  }

export const useById = id => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState([null]);

  useEffect(()=> {
    getById(id)
    .then(returnedCharacter => setCharacter(returnedCharacter))
    .finally(() => setLoading(false))
  }, [id]);

    return {
      loading,
      character
    };
};
