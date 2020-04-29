import {useMemo} from 'react';

export const useMovieById = (id, movies) => {
  const movieId = Number(id);

  const movie = useMemo(() =>{
    return movies.find((film) =>
      film.id === movieId);
  }, [id, movies]);

  return {
    movie,
  };
};
