import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BrowserRouter} from 'react-router-dom';

import {MainMovieCard} from './main-movie-card';
import {films} from '../../mocks/films';
import {user} from '../../mocks/user';

Enzyme.configure({adapter: new Adapter()});

describe(`MainMovieCard component rendered correctly, hover handler works`, () => {
  it(`Renders correctly without user`, () => {
    const handler = jest.fn();

    const tree = mount(
        <BrowserRouter>
          <MainMovieCard
            onVideoStart={handler}
            movie={films[0]}
          />
        </BrowserRouter>
    );
    const startBtn = tree.find(`.btn--play`);
    startBtn.simulate(`click`);
    expect(handler).toHaveBeenCalledTimes(1);
    const signInLink = tree.find(`.user-block__avatar a`);
    expect(signInLink).not.toBe(null);
  });

  it(`Renders correctly with user`, () => {
    const handler = jest.fn();

    const tree = shallow(
        <BrowserRouter>
          <MainMovieCard
            onVideoStart={handler}
            movie={films[0]}
            user={user}
          />
        </BrowserRouter>
    );
    const userImg = tree.find(`.user-block__avatar img`);
    expect(userImg).not.toBe(null);
  });
});
