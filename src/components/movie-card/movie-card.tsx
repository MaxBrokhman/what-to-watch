import React from 'react';

import {Videoplayer} from '../videoplayer/videoplayer';
import {Link} from 'react-router-dom';
import {TFilm} from '../../reducer/types';

type TMovieCardProps = {
  movie: TFilm;
  hoverHandler: (movie: TFilm) => () => void;
  leaveHandler: () => void;
  activeCard: TFilm;
}

export const MovieCard = ({
  movie,
  hoverHandler,
  leaveHandler,
  activeCard,
}: TMovieCardProps): JSX.Element => (
  <article
    className="small-movie-card catalog__movies-card"
    onMouseEnter={hoverHandler(movie)}
    onMouseLeave={leaveHandler}
  >
    <Link to={`/movie-card/${movie.id}`}>
      <div className="small-movie-card__image">
        {
          movie === activeCard
            ? <Videoplayer
              src={movie.preview_video_link}
              width="280"
              height="175"
              autoPlay
              muted
            />
            : <img
              src={movie.preview_image}
              alt={movie.name}
              width="280"
              height="175"
            />
        }
      </div>
    </Link>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href="movie-page.html">{movie.name}</a>
    </h3>
  </article>
);
