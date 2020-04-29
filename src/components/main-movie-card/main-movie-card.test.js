import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import {MainMovieCard} from './main-movie-card';
import {films} from '../../mocks/films';

it(`Renders MainMovieCard component correctly`, () => {
  const handler = jest.fn();
  const tree = renderer
                .create(
                    <BrowserRouter>
                      <MainMovieCard
                        movie={films[0]}
                        onVideoStart={handler}
                      />
                    </BrowserRouter>
                )
                .toJSON();
  expect(tree).toMatchSnapshot();
});
