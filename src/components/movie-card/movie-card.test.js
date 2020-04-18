import React from 'react';
import renderer from 'react-test-renderer';

import {MovieCard} from './movie-card';
import {films} from '../../mocks/films';

it(`Renders MovieCard component correctly`, () => {
  const handler = jest.fn();
  const tree = renderer
                .create(
                    <MovieCard
                      movie={films[0]}
                      hoverHandler={handler}
                    />
                )
                .toJSON();
  expect(tree).toMatchSnapshot();
});
