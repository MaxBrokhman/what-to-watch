import {
  useState,
  useCallback,
  useEffect,
} from 'react';

import {TFilm} from '../../reducer/types';
import {useAppContext} from '../../reducer/reducer';

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

type TUseLimitedFilms = {
  limitedFilms: Array<TFilm>;
  areAllMoviesLoaded: boolean;
  showMoreClickHandler: () => void;
}

export const useLimitedFilms = (movies: Array<TFilm>): TUseLimitedFilms => {
  const {state} = useAppContext();
  const [limit, setLimit] = useState(START_LIMIT);

  useEffect(() => {
    setLimit(START_LIMIT);
  }, [state.genre]);

  const areAllMoviesLoaded = limit >= movies.length;

  const moviesLimit = areAllMoviesLoaded
    ? movies.length
    : limit;

  const showMoreClickHandler = useCallback(() => {
    setLimit(limit + SHOW_MORE_STEP);
  }, [limit]);
  return {
    limitedFilms: movies.slice(0, moviesLimit),
    showMoreClickHandler,
    areAllMoviesLoaded,
  };
};
