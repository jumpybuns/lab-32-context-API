import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Character from './Character';

describe('Character component', () => {
  afterEach(() => cleanup());
  it('renders Character', () => {
    const { asFragment } = render(
      <Character
        name="Morty Smith"
        image="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
