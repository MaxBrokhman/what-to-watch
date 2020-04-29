import React, {Fragment} from 'react';

import {MovieCard} from '../movie-card/movie-card';
import {useVideoTimer, useFilteredFilms} from './hooks';

// eslint-disable-next-line
export const FilmsList = ({genre, films}) => {
  const {
    activeCard,
    hoverHandler,
    leaveHandler,
  } = useVideoTimer();
  const {
    movies,
    showMoreClickHandler,
    areAllMoviesLoaded,
  } = useFilteredFilms(genre, films);
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
