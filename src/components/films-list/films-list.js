import React, {useState} from 'react';

const TIMER = 1000;

const useVideoTimer = () => {
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

import {MovieCard} from '../movie-card/movie-card';
// eslint-disable-next-line
export const FilmsList = ({ movies }) => {
  const {
    activeCard,
    hoverHandler,
    leaveHandler,
  } = useVideoTimer();
  return (
    <div className="catalog__movies-list">
      {// eslint-disable-next-line
        movies.map((movie, i) => <MovieCard 
          movie={movie}
          hoverHandler={hoverHandler}
          leaveHandler={leaveHandler}
          activeCard={activeCard}
          key={i}
        />)
      }
    </div>
  );
};
