import React from 'react';
import renderer from 'react-test-renderer';

import {MovieCard} from './movie-card';
import {films} from '../../mocks/films';

it(`Renders MovieCard component correctly`, () => {
  const hoverHandler = jest.fn();
  const leaveHandler = jest.fn();
  const tree = renderer
                .create(
                    <MovieCard
                      hoverHandler={hoverHandler}
                      movie={films[0]}
                      leaveHandler={leaveHandler}
                      activeCard={null}
                    />
                )
                .toJSON();
  expect(tree).toMatchSnapshot();
});
