import React from 'react';

import {Videoplayer} from '../videoplayer/videoplayer';
// eslint-disable-next-line
export const MovieCard = ({movie, hoverHandler, leaveHandler, activeCard}) => (
  <article
    className="small-movie-card catalog__movies-card"
    onMouseEnter={hoverHandler(movie)}
    onMouseLeave={leaveHandler}
  >
    <div className="small-movie-card__image">
      {
        movie === activeCard
          ? <Videoplayer
            // eslint-disable-next-line
            src={movie.preview_video_link}
            width="280"
            height="175"
            autoPlay
            muted
          />
          // eslint-disable-next-line
          : <img src={movie.preview_image} alt={movie.name} width="280" height="175" />
      }
    </div>
    <h3 className="small-movie-card__title">
      {// eslint-disable-next-line
      <a className="small-movie-card__link" href="movie-page.html">{movie.name}</a>}
    </h3>
  </article>
);
