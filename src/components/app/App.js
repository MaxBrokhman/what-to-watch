import React, {Fragment, useReducer} from 'react';

import {MainPage} from '../main-page/main-page';
import {MoviePlayer} from '../movie-player/movie-player';
import {MainMovieCard} from '../main-movie-card/main-movie-card';
import {useActiveMovie, useFetchedFilms} from './hooks';
import {
  reducer,
  initialState,
  Context
} from '../../reducer/reducer';

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {startVideoButtonHandler, exitButtonHandler} = useActiveMovie(dispatch);
  useFetchedFilms(dispatch);
  return (
    <Context.Provider value={{state, dispatch}}>
      {
        state.activeMovie
          ? <MoviePlayer onVideoExit={exitButtonHandler} movie={state.activeMovie} />
          : (<Fragment>
            {
              state.filmsList.length && (
                <MainMovieCard
                  onVideoStart={startVideoButtonHandler}
                  movie={state.filmsList[0]}
                />
              )
            }
            <MainPage />
          </Fragment>
          )
      }
    </Context.Provider>
  );
};
