import React from 'react';
import renderer from 'react-test-renderer';

import {MoviePlayer} from './movie-player';
import {films} from '../../mocks/films';

it(`Renders MoviePlayer component correctly`, () => {
  const onVideoExit = jest.fn();
  const tree = renderer
                .create(
                    <MoviePlayer
                      movie={films[0]}
                      onVideoExit={onVideoExit}
                    />
                )
                .toJSON();
  expect(tree).toMatchSnapshot();
});
