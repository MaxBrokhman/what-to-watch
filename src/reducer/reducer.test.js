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
});
