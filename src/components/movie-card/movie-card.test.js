import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import {MovieCard} from './movie-card';
import {films} from '../../mocks/films';

it(`Renders MovieCard component correctly`, () => {
  const hoverHandler = jest.fn();
  const leaveHandler = jest.fn();
  const tree = renderer
                .create(
                    <BrowserRouter>
                      <MovieCard
                        hoverHandler={hoverHandler}
                        movie={films[0]}
                        leaveHandler={leaveHandler}
                        activeCard={null}
                      />
                    </BrowserRouter>
                )
                .toJSON();
  expect(tree).toMatchSnapshot();
});
