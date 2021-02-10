import React from 'react';
import { useCharacterById } from '../state/characters';
import CharacterDetail from '../components/details/CharacterDetail';
import Loading from '../components/loading/Loading';

const CharacterById = ({ match }) => {
  const { loading, character } = useCharacterById(match.params.id);

  if (loading) return <Loading />;
  return <CharacterDetail {...character} />;
};

export default CharacterById;
