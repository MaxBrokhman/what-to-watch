import React from 'react';
import renderer from 'react-test-renderer';

import {SignIn} from './sign-in';

it(`Renders SignIn component correctly`, () => {
  const tree = renderer
                .create(<SignIn />)
                .toJSON();
  expect(tree).toMatchSnapshot();
});
