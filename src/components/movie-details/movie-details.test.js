import React from 'react';
import renderer from 'react-test-renderer';

import {MovieDetails} from './movie-details';
import {films} from '../../mocks/films';

it(`Renders MovieDetails component correctly`, () => {
  const handler = jest.fn();
  const tree = renderer
                .create(
                    <MovieDetails
                      id={films[0].id}
                      startVideoButtonHandler={handler}
                    />
                )
                .toJSON();
  expect(tree).toMatchSnapshot();
});
