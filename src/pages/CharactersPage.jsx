import React, { useState } from 'react';
import { RickAndMortyProvider } from '../state/characterContext';
import CharacterList from '../components/characters/CharacterList';
import ThemeProvider from '../state/theme-context';

const CharactersPage = () => {
  const [Provider, characters] = useState(() => RickAndMortyProvider);

  return (
    <>
      <Provider>
        <ThemeProvider />
        <CharacterList characters={characters} />
      </Provider>
    </>
  );
};
export default CharactersPage;
