import React from 'react';
import { useThemeToggle } from '../../hooks/character';
import { useThemeType } from '../../hooks/character';
import styles from './Header.css'


const Header = () => {
  const toggle = useThemeToggle();
  const type = useThemeType();
  console.log(toggle)
  return (
    <header className={styles[type]}>
  
      <div>
          {/* <img src="" /> */}
      </div>
      <div>
          <a href="/">HOME</a>
      </div>
      <div>
        <label>Toggle for dark or light layout</label>
        <button onClick={toggle}>{type}</button>
        
      </div>
      <div>
          <h1>
            RICK AND MORTY
          </h1>
      </div>
    </header>
  );
};
export default Header;
