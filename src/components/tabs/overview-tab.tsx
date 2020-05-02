import React, {Fragment} from 'react';

import {TFilm} from '../../reducer/types';

export const OverviewTab = ({movie}: {movie: TFilm}): JSX.Element => (
  <Fragment>
    <div className="movie-rating">
      <div className="movie-rating__score">{movie.rating}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">Very good</span>
        <span className="movie-rating__count">240 ratings</span>
      </p>
    </div>

    <div className="movie-card__text">
      <p>{movie.description}</p>
      <p className="movie-card__director"><strong>Director: {movie.director}</strong></p>
      <p className="movie-card__starring"><strong>Starring: {movie.starring.join(`, `)} and other</strong></p>
    </div>
  </Fragment>
);
