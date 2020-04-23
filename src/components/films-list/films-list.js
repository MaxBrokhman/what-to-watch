import React from 'react';

import {MovieCard} from '../movie-card/movie-card';
import {useVideoTimer, useFilteredFilms} from './hooks';
import {useAppContext} from '../../reducer/reducer';

// eslint-disable-next-line
export const FilmsList = () => {
  const {
    activeCard,
    hoverHandler,
    leaveHandler,
  } = useVideoTimer();
  const {state} = useAppContext();
  const {movies} = useFilteredFilms(state.genre, state.filmsList);
  return (
    <div className="catalog__movies-list">
      {// eslint-disable-next-line
        movies.map((movie, i) => 
          <MovieCard
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
