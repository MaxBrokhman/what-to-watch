import {
  useState,
  useCallback,
  useEffect,
} from 'react';

import {TFilm} from '../../reducer/types';

const TIMER = 1000;
const START_LIMIT = 8;
const SHOW_MORE_STEP = 20;

type TUseVideoTimer = {
  activeCard: TFilm;
  hoverHandler: (movie: TFilm) => () => void;
  leaveHandler: () => void;
}

export const useVideoTimer = (): TUseVideoTimer => {
  const [activeCard, setActiveCard] = useState(null);
  const [timer, setTimer] = useState(null);
  const hoverHandler = (movie) => (): void => {
    setTimer(setTimeout(() => {
      setActiveCard(movie);
    }, TIMER));
  };
  const leaveHandler = (): void => {
    clearTimeout(timer);
    setActiveCard(null);
  };

  useEffect(() => {
    return (): void => {
      clearTimeout(timer);
      setActiveCard(null);
    };
  }, [timer]);

  return {
    activeCard,
    hoverHandler,
    leaveHandler,
  };
};

type TUseFilteredFilms = {
  movies: Array<TFilm>;
  areAllMoviesLoaded: boolean;
  showMoreClickHandler: () => void;
}

export const useFilteredFilms = (genre: string, movies: Array<TFilm>): TUseFilteredFilms => {
  const [limit, setLimit] = useState(START_LIMIT);

  useEffect(() => {
    setLimit(START_LIMIT);
  }, [genre]);

  const filteredMovies = genre === `all genres`
    ? movies
    : movies.filter((film) => film.genre === genre);

  const areAllMoviesLoaded = limit >= filteredMovies.length;

  const moviesLimit = areAllMoviesLoaded
    ? filteredMovies.length
    : limit;

  const showMoreClickHandler = useCallback(() => {
    setLimit(limit + SHOW_MORE_STEP);
  }, [limit]);
  return {
    movies: filteredMovies.slice(0, moviesLimit),
    showMoreClickHandler,
    areAllMoviesLoaded,
  };
};
