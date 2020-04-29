import React from 'react';
import {Link} from 'react-router-dom';

import {useFavMovie} from '../../common-hooks/use-fav-movie';
import {MyListButton} from '../my-list-button/my-list-button';
import {MovieCardHeader} from '../movie-card-header/movie-card-header';
import {PlayButton} from '../play-button/play-button';

// eslint-disable-next-line
export const MainMovieCard = ({onVideoStart, movie}) => {
  const {isFav, addToFavsClickHandler} = useFavMovie(movie);
  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        {// eslint-disable-next-line
        <img src={movie.background_image} alt={movie.name} />}
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <MovieCardHeader />

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            {// eslint-disable-next-line
            <Link to={`/movie-card/${movie.id}`}>
                {// eslint-disable-next-line
              <img src={movie.poster_image} alt={movie.name} width="218" height="327" />}
              </Link>}
          </div>

          <div className="movie-card__desc">
            {// eslint-disable-next-line
          <h2 className="movie-card__title">{movie.name}</h2>}
            <p className="movie-card__meta">
              {// eslint-disable-next-line
            <span className="movie-card__genre">{movie.genre}</span>}
              {// eslint-disable-next-line
            <span className="movie-card__year">{movie.released}</span>}
            </p>

            <div className="movie-card__buttons">
              {// eslint-disable-next-line
              <PlayButton clickHandler={onVideoStart(movie.id)} />}
              <MyListButton isFav={isFav} clickHandler={addToFavsClickHandler} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
