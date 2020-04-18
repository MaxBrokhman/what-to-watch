import React from 'react';
// eslint-disable-next-line
export const MovieCard = ({ movie, hoverHandler }) => (
  <article className="small-movie-card catalog__movies-card" onMouseOver={hoverHandler(movie)}>
    <div className="small-movie-card__image">
      {// eslint-disable-next-line
      <img src={`img/${movie.src}`} alt={movie.name} width="280" height="175" />}
    </div>
    <h3 className="small-movie-card__title">
      {// eslint-disable-next-line
      <a className="small-movie-card__link" href="movie-page.html">{movie.name}</a>}
    </h3>
  </article>
);
