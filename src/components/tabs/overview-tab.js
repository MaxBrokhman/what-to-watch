import React, {Fragment} from 'react';

// eslint-disable-next-line
export const OverviewTab = ({movie}) => (
  <Fragment>
    <div className="movie-rating">
      {// eslint-disable-next-line
      <div className="movie-rating__score">{movie.rating}</div>}
      <p className="movie-rating__meta">
        <span className="movie-rating__level">Very good</span>
        <span className="movie-rating__count">240 ratings</span>
      </p>
    </div>

    <div className="movie-card__text">
      {// eslint-disable-next-line
      <p>{movie.description}</p>}
      {// eslint-disable-next-line
      <p className="movie-card__director"><strong>Director: {movie.director}</strong></p>}
      {// eslint-disable-next-line
      <p className="movie-card__starring"><strong>Starring: {movie.starring.join(', ')} and other</strong></p>}
    </div>
  </Fragment>
);
