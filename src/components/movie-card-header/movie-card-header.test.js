import React from 'react';
import renderer from 'react-test-renderer';

import {MovieCardHeader} from './movie-card-header';

it(`Renders MovieCardHeader component correctly`, () => {
  const tree = renderer
                .create(
                    <MovieCardHeader />
                )
                .toJSON();
  expect(tree).toMatchSnapshot();
});
