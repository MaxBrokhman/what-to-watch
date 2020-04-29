import React from 'react';

import {Videoplayer} from '../videoplayer/videoplayer';
import {Link} from 'react-router-dom';

export const MovieCard = ({
  // eslint-disable-next-line
  movie, 
  // eslint-disable-next-line
  hoverHandler, 
  // eslint-disable-next-line
  leaveHandler, 
  // eslint-disable-next-line
  activeCard,
}) => (
  <article
    className="small-movie-card catalog__movies-card"
    onMouseEnter={hoverHandler(movie)}
    onMouseLeave={leaveHandler}
  >
    {// eslint-disable-next-line
      <Link to={`/movie-card/${movie.id}`}>
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
              : <img
                // eslint-disable-next-line
                src={movie.preview_image} 
                // eslint-disable-next-line
                alt={movie.name} 
                width="280"
                height="175"
              />
          }
        </div>
      </Link>}
    <h3 className="small-movie-card__title">
      {// eslint-disable-next-line
      <a className="small-movie-card__link" href="movie-page.html">{movie.name}</a>}
    </h3>
  </article>
);
