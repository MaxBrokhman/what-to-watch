import React from 'react';
import renderer from 'react-test-renderer';

import {MainMovieCard} from './main-movie-card';
import {films} from '../../mocks/films';

it(`Renders MainMovieCard component correctly`, () => {
  const handler = jest.fn();
  const tree = renderer
                .create(
                    <MainMovieCard
                      movie={films[0]}
                      onVideoStart={handler}
                    />
                )
                .toJSON();
  expect(tree).toMatchSnapshot();
});
