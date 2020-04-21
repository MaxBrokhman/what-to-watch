import React from 'react';
import renderer from 'react-test-renderer';

import {Videoplayer} from './videoplayer';
import {films} from '../../mocks/films';

it(`Renders Videoplayer component correctly`, () => {
  const tree = renderer
                .create(
                    <Videoplayer
                      src={films[0].preview}
                    />
                )
                .toJSON();
  expect(tree).toMatchSnapshot();
});
