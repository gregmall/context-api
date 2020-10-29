import React from 'react';

import { useParams } from 'react-router-dom'
import { useById } from '../../hooks/character';
import { useThemeType } from '../../hooks/character';
import styles from './DetailDisplay.css'

const DetailDisplay = () => {
  const { id } = useParams();
  const { loading, character } = useById(id);
  if(loading) return <span><img src="http://cdn.lowgif.com/full/ff8280aafe27319d-ajax-loading-gif-transparent-background-2-gif-images.gif"/></span>;
  const themeType = useThemeType(); 
  const theme = styles[themeType];
  
  return(
    <div className={theme}>
      <h1 data-testid ="detail">Name: {character.name}</h1>
      <img src={character.image} alt={character.name}/>
      <h2>Status: {character.status}</h2>
      <a href="/"><button>GO BACK</button></a>
    
    </div>
  )
};

export default DetailDisplay;
