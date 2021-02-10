import { useState, useEffect } from 'react';
import { findCharacters } from '../services/rickAndMortyAPI';

export const useCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [episodes, setCharacters] = useState([]);

  useEffect(() => {
    findCharacters().then((characters) => {
      setCharacters(characters);
      setLoading(false);
    });
  }, []);

  return {
    loading,
    episodes,
  };
};
