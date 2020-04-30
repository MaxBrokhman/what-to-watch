import React, {Fragment} from 'react';

import {useMovieRuntime} from '../../common-hooks/use-movie-runtime';

// eslint-disable-next-line
export const DetailsTab = ({movie}) => {
  // eslint-disable-next-line
  const {time} = useMovieRuntime(movie.run_time);
  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          {// eslint-disable-next-line
        <span className="movie-card__details-value">{movie.director}</span>}
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {// eslint-disable-next-line
            movie.starring.map((star) => (
                <Fragment key={star}>
                  {star} <br />
                </Fragment>
              ))
            }
          </span>
        </p>
      </div>
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{time.hours}h {time.minutes}m</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          {// eslint-disable-next-line
        <span className="movie-card__details-value">{movie.genre}</span>}
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          {// eslint-disable-next-line
          <span className="movie-card__details-value">{movie.released}</span>}
        </p>
      </div>
    </div>
  );
};
