import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {MovieCard} from './movie-card';
import {films} from '../../mocks/films';

Enzyme.configure({adapter: new Adapter()});

it(`MovieCard component rendered correctly, hover handler works`, () => {
  const hoverHandler = jest.fn();
  const tree = shallow(
      <MovieCard hoverHandler={hoverHandler} movie={films[0]} />
  );
  const input = tree.find(`.small-movie-card`);
  input.simulate(`mouseover`, films[0]);
  expect(hoverHandler).toHaveBeenCalledTimes(1);
  expect(hoverHandler).toHaveBeenCalledWith(films[0]);
});
