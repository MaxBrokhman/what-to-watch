import {useMemo} from 'react';
import {TFilm} from '../reducer/types';

export const useMovieById = (id: number, movies: Array<TFilm>): {movie: TFilm} => {
  const movieId = Number(id);

  const movie = useMemo(() =>{
    return movies.find((film) =>
      film.id === movieId);
  }, [id, movies]);

  return {
    movie,
  };
};
