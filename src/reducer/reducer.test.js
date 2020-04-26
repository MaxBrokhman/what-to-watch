import {reducer, initialState} from './reducer';
import {films} from '../mocks/films';

describe(`Reducer works as expected`, () => {
  it(`Correctly sets genre`, () => {
    const newState = reducer(initialState, {type: `SET_GENRE`, payload: `horror`});
    expect(newState).toMatchObject(Object.assign({}, initialState, {genre: `horror`}));
  });
  it(`Correctly sets active movie`, () => {
    const newState = reducer(initialState, {type: `SET_ACTIVE_MOVIE`, payload: films[0]});
    expect(newState).toMatchObject(Object.assign({}, initialState, {activeMovie: films[0]}));
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
});
