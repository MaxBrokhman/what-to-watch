import React from 'react';

import {useAppContext} from '../../reducer/reducer';
import {useGenres} from './hooks';

export const GenresList = (): JSX.Element => {
  const {state, dispatch} = useAppContext();
  const {genres, clickHandler} = useGenres(state.filmsList, dispatch);
  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre) => (
          <li className="catalog__genres-item" key={genre}>
            <a
              href="#"
              className="catalog__genres-link"
              onClick={clickHandler(genre)}
            >
              {genre}
            </a>
          </li>
        ))
      }
    </ul>
  );
};
