import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {MovieCard} from './movie-card';
import {films} from '../../mocks/films';

Enzyme.configure({adapter: new Adapter()});
describe(`MovieCard component rendered correctly, hover handler works`, () => {
  it(`Renders correctly on start`, () => {
    const hoverHandler = jest.fn();
    const leaveHandler = jest.fn();

    const tree = shallow(
        <MovieCard
          hoverHandler={hoverHandler}
          movie={films[0]}
          leaveHandler={leaveHandler}
          activeCard={null}
        />
    );
    const card = tree.find(`.small-movie-card`);
    card.simulate(`mouseover`, films[0]);
    expect(hoverHandler).toHaveBeenCalledTimes(1);
    expect(hoverHandler).toHaveBeenCalledWith(films[0]);
    const img = tree.find(`img`);
    expect(img).not.toBe(null);
  });

  it(`Renders correctly when card is active`, () => {
    const hoverHandler = jest.fn();
    const leaveHandler = jest.fn();

    const tree = shallow(
        <MovieCard
          hoverHandler={hoverHandler}
          movie={films[0]}
          leaveHandler={leaveHandler}
          activeCard={films[0]}
        />
    );
    const video = tree.find(`video`);
    expect(video).not.toBe(null);
  });
});
