import React from 'react';
import { Link } from 'react-router-dom';
import Character from './Character';
import { useCharacters } from '../../state/characterContext';
import styles from './CharacterList.css';
import { useTheme } from '../../state/theme-context';
import ThemeProvider from '../../state/theme-context';

const CharacterList = () => {
  const theme = useTheme();
  const characters = useCharacters();

  const characterElements = characters.map((character) => (
    <li key={character.id}>
      <Link to={`/characters/${character.id}`}>
        <Character image={character.image} name={character.name} />
      </Link>
    </li>
  ));

  return (
    <>
      <ThemeProvider />
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
