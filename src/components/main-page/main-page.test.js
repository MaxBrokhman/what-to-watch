import React from 'react';
import renderer from 'react-test-renderer';

import {MainPage} from './main-page';
import {films} from '../../mocks/films';

it(`Renders MainPage component correctly`, () => {
  const startVideoButtonHandler = jest.fn();
  const tree = renderer
                .create(
                    <MainPage
                      genre='drama'
                      startVideoButtonHandler={startVideoButtonHandler}
                      films={films}
                    />
                )
                .toJSON();
  expect(tree).toMatchSnapshot();
});
