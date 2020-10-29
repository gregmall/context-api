
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { useCharacters, useThemeType } from '../../hooks/character';
import Character from './Character'
import styles from './CharacterList.css'



const CharacterList = ({ page }) => {

  const themeType = useThemeType(); 
  const theme = styles[themeType];

  const { loading, characters } = useCharacters(page);
  if(loading) return <span><img src="http://cdn.lowgif.com/full/ff8280aafe27319d-ajax-loading-gif-transparent-background-2-gif-images.gif"/></span>

    const characterElements = characters.map(character => (
    
      <li key={character.id}  >
        <Link to = {`/detail/${character.id}`}>
          <Character  {...character } />
        </Link>
      </li>
      
      
    ));

  return (
    
    <ul data-testid="characters" className={theme} >
      {characterElements}
    </ul> 
  );
};

CharacterList.propTypes = {
 page: PropTypes.number
};


export default CharacterList;
