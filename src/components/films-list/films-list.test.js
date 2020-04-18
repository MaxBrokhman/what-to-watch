import React from 'react';
import renderer from 'react-test-renderer';

import {FilmsList} from './films-list';
import {films} from '../../mocks/films';

it(`Renders FilmsList component correctly`, () => {
  const tree = renderer
                .create(
                    <FilmsList
                      movies={films}
                    />
                )
                .toJSON();
  expect(tree).toMatchSnapshot();
});
