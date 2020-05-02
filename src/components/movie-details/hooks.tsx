import {useMemo} from 'react';

import {TFilm} from '../../reducer/types';

type TUseSimilarMovies = {
  similarMovies: Array<TFilm>;
}

export const useSimilarMovies = (movie: TFilm, movies: Array<TFilm>): TUseSimilarMovies => {
  const similarMovies = movie
    ? useMemo(() => {
      return movies.filter((film) => {
        return film.genre === movie.genre && film.id !== movie.id;
      });
    }, [movie.genre, movies])
    : [];
  return {
    similarMovies,
  };
};
