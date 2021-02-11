import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import CharacterByIdResponse from '../fixtures/characterById.json';
import CharacterById from './CharacterById';
import { MemoryRouter } from 'react-router-dom';

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character/2', (req, res, ctx) => {
    return res(ctx.json(CharacterByIdResponse));
  })
);

describe('CharacterById container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('fetches and displays character deets', async () => {
    render(
      <MemoryRouter>
        <CharacterById match={{ params: { id: '2' } }} />
      </MemoryRouter>
    );

    screen.getAllByAltText('loading');

    const character = await screen.findByTestId('character');

    return waitFor(() => {
      expect(character).not.toBeEmptyDOMElement();
    });
  });
});
