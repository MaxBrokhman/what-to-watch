import React, {useReducer} from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import {MainPage} from '../main-page/main-page';
import {MoviePlayer} from '../movie-player/movie-player';
import {MovieDetails} from '../movie-details/movie-details';
import {useActiveMovie, useFetchedFilms} from './hooks';
import {
  reducer,
  initialState,
  Context
} from '../../reducer/reducer';
import {SignIn} from '../sign-in/sign-in';
import {AddReview} from '../add-review/add-review';
import {MyList} from '../my-list/my-list';

export const App = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {startVideoButtonHandler, exitButtonHandler} = useActiveMovie();
  useFetchedFilms(dispatch);
  return (
    <Context.Provider value={{state, dispatch}}>
      <Switch>
        <Route path='/login'>
          <SignIn />
        </Route>
        {
          state.filmsList.length && <Route
            path='/movie-card/:id'
            render={({match}): JSX.Element => (
              <MovieDetails id={match.params.id} startVideoButtonHandler={startVideoButtonHandler} />
            )}
            exact
          />
        }
        {
          state.filmsList.length && <Route path='/movie-card/:id/add-review' render={({match}): JSX.Element => (
            <AddReview id={match.params.id} />
          )} />
        }
        {
          state.filmsList.length && <Route path='/watch/:id' render={({match}): JSX.Element => {
            return <MoviePlayer
              id={match.params.id}
              onVideoExit={exitButtonHandler}
            />;
          }}/>
        }
        <Route path='/my-list'>
          <MyList />
        </Route>
        <Route path='/*'>
          {
            state.isAuthorizationRequired && <Redirect exact from='/*' to='/login' />
          }
          {
            !state.activeMovie && !state.isAuthorizationRequired && (
              <MainPage startVideoButtonHandler={startVideoButtonHandler} />
            )
          }
        </Route>
      </Switch>
    </Context.Provider>
  );
};
