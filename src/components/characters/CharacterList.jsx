import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Character from './Character';
import { useCharacters } from '../../state/characterContext';
import styles from './CharacterList.css';
// import { useTheme } from '../../state/theme';
// import ThemeProvider from '../../state/theme-context';

const CharacterList = () => {
  const [theme, setTheme] = useState('light');
  const characters = useCharacters();

  const characterElements = characters.map((character) => (
    <li key={character.id}>
      <Link to={`/characters/${character.id}`}>
        <Character image={character.image} name={character.name} />
      </Link>
    </li>
  ));

  const toggle = ({ target }) => {
    if (target.checked) setTheme('dark');
    else setTheme('light');
  };

  return (
    <>
      <input type="checkbox" value={{ theme }} onChange={toggle} />
      <ul
        className={`${styles.CharacterList} ${styles[theme]}`}
        data-testid="characters"
      >
        {characterElements}
      </ul>
    </>
  );
};

export default CharacterList;
