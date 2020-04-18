import React, {useState} from 'react';

import {MovieCard} from '../movie-card/movie-card';
// eslint-disable-next-line
export const FilmsList = ({ movies }) => {
  const [activeCard, setActiveCard] = useState(null);
  const hoverHandler = (movie) => () => setActiveCard(movie);
  return (
    <div className="catalog__movies-list">
      {// eslint-disable-next-line
        movies.map((movie, i) => <MovieCard 
          movie={movie}
          hoverHandler={hoverHandler}
          activeCard={activeCard}
          key={i}
        />)
      }
    </div>
  );
};
