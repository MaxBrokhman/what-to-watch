import {SyntheticEvent} from 'react';

import {setGenre} from '../../reducer/actions';
import {TFilm, TDispatch} from '../../reducer/types';

type TUseGenres = {
  genres: Array<string>;
  clickHandler: (genre: string) => (evt: SyntheticEvent) => void;
}

export const useGenres = (movies: Array<TFilm>, dispatch: TDispatch): TUseGenres => {
  const res = [`all genres`];
  for (const movie of movies) {
    if (res.indexOf(movie.genre) === -1) {
      res.push(movie.genre);
    }
  }
  const clickHandler = (genre: string) => (evt: SyntheticEvent): void => {
    evt.preventDefault();
    setGenre(genre, dispatch);
  };
  return {
    genres: res,
    clickHandler,
  };
};
