import React, { useState } from 'react';
import { RickAndMortyProvider } from '../state/characterContext';
import CharacterList from '../components/characters/CharacterList';

const CharactersPage = () => {
  const [Provider, characters] = useState(() => RickAndMortyProvider);

  // const toggle = ({ toggle }) => {
  //   if(target.checked) setProvider(() => //Dark MODE)
  // }

  return (
    <>
      {/* <input type="checkbox" onChange={toggle} />*/}
      <Provider>
        <CharacterList characters={characters} />
      </Provider>
    </>
  );
};

export default CharactersPage;
