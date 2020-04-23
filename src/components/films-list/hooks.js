import {useState, useCallback, useEffect} from 'react';

const TIMER = 1000;
const START_LIMIT = 8;
const SHOW_MORE_STEP = 20;

export const useVideoTimer = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [timer, setTimer] = useState(null);
  const hoverHandler = (movie) => () => {
    setTimer(setTimeout(() => {
      setActiveCard(movie);
    }, TIMER));
  };
  const leaveHandler = () => {
    clearTimeout(timer);
    setActiveCard(null);
  };

  return {
    activeCard,
    hoverHandler,
    leaveHandler,
  };
};

export const useFilteredFilms = (genre, movies) => {
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
