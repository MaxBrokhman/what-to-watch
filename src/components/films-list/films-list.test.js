import React from 'react';
import renderer from 'react-test-renderer';

import {FilmsList} from './films-list';

it(`Renders FilmsList component correctly`, () => {
  const tree = renderer
                .create(<FilmsList />)
                .toJSON();
  expect(tree).toMatchSnapshot();
});
