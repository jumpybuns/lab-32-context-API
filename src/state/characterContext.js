import React, { createContext, useContext } from 'react';
import Loading from '../components/loading/Loading';
import { useRickAndMortyCharacters } from './characters';

export const CharacterContext = createContext(null);

export const RickAndMortyProvider = ({ children }) => {
  const { loading, characters } = useRickAndMortyCharacters();

  return (
    <CharacterContext.Provider value={{ characters }}>
      {loading ? <Loading /> : children}
    </CharacterContext.Provider>
  );
};

export const useCharacters = () => {
  const { characters } = useContext(CharacterContext);
  return characters;
};
