import React, { useState } from 'react';
import { RickAndMortyProvider } from '../state/characterContext';
import CharacterList from '../components/characters/CharacterList';

const CharactersPage = () => {
  const [Provider, characters] = useState(() => RickAndMortyProvider);

  return (
    <>
      <Provider>
        <CharacterList characters={characters} />
      </Provider>
    </>
  );
};
export default CharactersPage;
