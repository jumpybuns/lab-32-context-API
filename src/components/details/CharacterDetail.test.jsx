import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterDetail from './CharacterDetail';

describe('CharacterDetail component', () => {
  afterEach(() => cleanup());
  it('renders CharacterDetail', () => {
    const { asFragment } = render(
      <CharacterDetail
        name="Morty Smith"
        image="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
        status="alive"
        species="human"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
