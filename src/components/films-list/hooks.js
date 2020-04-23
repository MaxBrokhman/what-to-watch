import {useState} from 'react';

const TIMER = 1000;

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
  const filteredMovies = genre
    ? movies.filter((film) => film.genre === genre)
    : movies;
  return {
    movies: filteredMovies,
  };
};
