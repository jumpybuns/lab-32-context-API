import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import CharactersAPIResponse from '../fixtures/characters.json';
import CharactersPage from './CharactersPage';
import { MemoryRouter } from 'react-router-dom';

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    return res(ctx.json(CharactersAPIResponse));
  })
);

describe('All Characters Container Test', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('renders All Characters', async () => {
    render(
      <MemoryRouter>
        <CharactersPage />
      </MemoryRouter>
    );
    screen.getAllByAltText('loading');

    const listOfCharacters = await screen.findByTestId('characters');

    return waitFor(() => {
      expect(listOfCharacters).not.toBeEmptyDOMElement();
    });
  });
});
