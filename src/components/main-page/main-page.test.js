import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';

import {MainPage} from './main-page';
import {films} from '../../mocks/films';

it(`Renders MainPage component correctly`, () => {
  const startVideoButtonHandler = jest.fn();
  const tree = renderer
                .create(
                    <BrowserRouter>
                      <MainPage
                        genre='drama'
                        startVideoButtonHandler={startVideoButtonHandler}
                        films={films}
                      />
                    </BrowserRouter>
                )
                .toJSON();
  expect(tree).toMatchSnapshot();
});
