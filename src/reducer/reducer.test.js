import {reducer, initialState} from './reducer';
import {user} from '../mocks/user';

describe(`Reducer works as expected`, () => {
  it(`Correctly sets genre`, () => {
    const newState = reducer(initialState, {type: `SET_GENRE`, payload: `horror`});
    expect(newState).toMatchObject(Object.assign({}, initialState, {genre: `horror`}));
  });
  it(`Sets films correctly`, () => {
    const newState = reducer(initialState, {type: `SET_FILMS`, payload: `DATA AQUIRED`});
    expect(newState).toMatchObject(Object.assign({}, initialState, {filmsList: `DATA AQUIRED`}));
  });
  it(`Sets error correctly`, () => {
    const newState = reducer(initialState, {type: `SET_ERROR`, payload: `ERROR OCCURED`});
    expect(newState).toMatchObject(Object.assign({}, initialState, {error: `ERROR OCCURED`}));
  });
  it(`Sets isFetching status correctly`, () => {
    const newState = reducer(initialState, {type: `SET_FETCHING`, payload: true});
    expect(newState).toMatchObject(Object.assign({}, initialState, {isFetching: true}));
  });
  it(`Sets isAuthorizationRequired correctly`, () => {
    const newState = reducer(initialState, {type: `SET_AUTHORIZATION`, payload: true});
    expect(newState).toMatchObject(Object.assign({}, initialState, {isAuthorizationRequired: true}));
  });
  it(`Sets user correctly`, () => {
    const newState = reducer(initialState, {type: `SET_USER`, payload: user});
    expect(newState).toMatchObject(Object.assign({}, initialState, {user}));
  });
  it(`Adds new favorite correctly`, () => {
    const newState = reducer(initialState, {type: `ADD_FAVORITE`, payload: {id: 1}});
    expect(newState).toMatchObject(Object.assign({}, initialState, {favorites: [{id: 1}]}));
  });
  it(`Removes favorite correctly`, () => {
    const startFavorites = [
      {
        id: 1,
      },
      {
        id: 2,
      },
      {
        id: 3,
      },
      {
        id: 4,
      },
      {
        id: 5,
      },
      {
        id: 6,
      }
    ];
    const startState = Object.assign({}, initialState, {favorites: startFavorites});
    const newState = reducer(startState, {type: `REMOVE_FAVORITE`, payload: 1});
    expect(newState.favorites[0]).toMatchObject({id: 2});
    expect(newState.favorites.length).toBeEqual(5);

    const startState2 = Object.assign({}, initialState, {favorites: startFavorites});
    const newState2 = reducer(startState2, {type: `REMOVE_FAVORITE`, payload: 6});
    expect(newState2.favorites[newState2.favorites.length - 1]).toMatchObject({id: 5});
    expect(newState2.favorites.length).toBeEqual(5);

    const startState3 = Object.assign({}, initialState, {favorites: startFavorites});
    const newState3 = reducer(startState3, {type: `REMOVE_FAVORITE`, payload: 4});
    expect(newState3.favorites[3]).toMatchObject({id: 5});
    expect(newState3.favorites.length).toBeEqual(5);
  });
});
