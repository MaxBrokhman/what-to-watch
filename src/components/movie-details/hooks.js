import {useMemo} from 'react';

export const useSimilarMovies = (movie, movies) => {
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
