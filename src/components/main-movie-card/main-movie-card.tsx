import React, {SyntheticEvent} from 'react';
import {Link} from 'react-router-dom';

import {useFavMovie} from '../../common-hooks/use-fav-movie';
import {MyListButton} from '../my-list-button/my-list-button';
import {MovieCardHeader} from '../movie-card-header/movie-card-header';
import {PlayButton} from '../play-button/play-button';
import {TFilm} from '../../reducer/types';

type TMainMovieCardProps = {
  onVideoStart: (id: number) => (evt: SyntheticEvent) => void;
  movie: TFilm;
}

export const MainMovieCard = ({onVideoStart, movie}: TMainMovieCardProps): JSX.Element => {
  const {isFav, addToFavsClickHandler} = useFavMovie(movie);
  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={movie.background_image} alt={movie.name} />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <MovieCardHeader />

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <Link to={`/movie-card/${movie.id}`}>
              <img src={movie.poster_image} alt={movie.name} width="218" height="327" />
            </Link>
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{movie.name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{movie.genre}</span>
              <span className="movie-card__year">{movie.released}</span>
            </p>

            <div className="movie-card__buttons">
              <PlayButton clickHandler={onVideoStart(movie.id)} />
              <MyListButton isFav={isFav} clickHandler={addToFavsClickHandler} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
