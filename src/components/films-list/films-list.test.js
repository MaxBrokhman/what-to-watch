import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import {FilmsList} from './films-list';
import {films} from '../../mocks/films';

it(`Renders FilmsList component correctly`, () => {
  const tree = renderer
                .create(
                    <BrowserRouter>
                      <FilmsList genre={`drama`} films={films} />
                    </BrowserRouter>
                )
                .toJSON();
  expect(tree).toMatchSnapshot();
});
