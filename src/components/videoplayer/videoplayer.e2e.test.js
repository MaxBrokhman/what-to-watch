import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Videoplayer} from './videoplayer';
import {films} from '../../mocks/films';

Enzyme.configure({adapter: new Adapter()});

it(`Videoplayer component rendered correctly`, () => {
  const tree = mount(
      <Videoplayer
        src={films[0].preview}
      />
  );
  const video = tree.find(`video`);
  expect(video.prop(`src`)).toEqual(films[0].preview);
});
