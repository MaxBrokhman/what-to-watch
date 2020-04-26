import React, {Fragment} from 'react';

import {MovieCard} from '../movie-card/movie-card';
import {useVideoTimer, useFilteredFilms} from './hooks';
import {useAppContext} from '../../reducer/reducer';

export const FilmsList = () => {
  const {
    activeCard,
    hoverHandler,
    leaveHandler,
  } = useVideoTimer();
  const {state} = useAppContext();
  const {
    movies,
    showMoreClickHandler,
    areAllMoviesLoaded,
  } = useFilteredFilms(state.genre, state.filmsList);
  return (
    <Fragment>
      <div className="catalog__movies-list">
        {
          movies.map((movie) =>
            <MovieCard
              movie={movie}
              hoverHandler={hoverHandler}
              leaveHandler={leaveHandler}
              activeCard={activeCard}
              key={movie.id}
            />)
        }
      </div>
      {
        !areAllMoviesLoaded && (
          <div className="catalog__more">
            <button
              className="catalog__button"
              type="button"
              onClick={showMoreClickHandler}
            >
            Show more
            </button>
          </div>
        )
      }
    </Fragment>
  );
};
