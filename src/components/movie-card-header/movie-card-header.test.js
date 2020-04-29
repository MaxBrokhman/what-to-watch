import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import {MovieCardHeader} from './movie-card-header';

it(`Renders MovieCardHeader component correctly`, () => {
  const tree = renderer
                .create(
                    <BrowserRouter>
                      <MovieCardHeader />
                    </BrowserRouter>
                )
                .toJSON();
  expect(tree).toMatchSnapshot();
});
