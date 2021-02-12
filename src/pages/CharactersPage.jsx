import React, { useState } from 'react';
import CharacterList from '../components/characters/CharacterList';
import { RickAndMortyProvider } from '../state/characterContext';

const CharactersPage = () => {
  const [Provider] = useState(() => RickAndMortyProvider);

  return (
    <>
      <Provider>
        <CharacterList />
      </Provider>
    </>
  );
};
export default CharactersPage;
