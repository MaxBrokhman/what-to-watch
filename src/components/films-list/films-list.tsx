import React, {Fragment} from 'react';

import {MovieCard} from '../movie-card/movie-card';
import {useVideoTimer, useLimitedFilms} from './hooks';
import {TFilm} from '../../reducer/types';

type TFilmsListProps = {
  films: Array<TFilm>;
}

export const FilmsList = ({films}: TFilmsListProps): JSX.Element => {
  const {
    activeCard,
    hoverHandler,
    leaveHandler,
  } = useVideoTimer();
  const {
    limitedFilms,
    showMoreClickHandler,
    areAllMoviesLoaded,
  } = useLimitedFilms(films);
  return (
    <Fragment>
      <div className="catalog__movies-list">
        {
          limitedFilms.map((movie) =>
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
