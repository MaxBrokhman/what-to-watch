import React from 'react';
import renderer from 'react-test-renderer';

import {GenresList} from './genres-list';

it(`Renders GenresList component correctly`, () => {
  const tree = renderer
                .create(<GenresList />)
                .toJSON();
  expect(tree).toMatchSnapshot();
});
