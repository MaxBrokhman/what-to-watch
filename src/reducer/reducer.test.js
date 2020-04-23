import {reducer, initialState} from './reducer';

describe(`Reducer works as expected`, () => {
  it(`Correctly sets genre`, () => {
    const newState = reducer(initialState, {type: `SET_FILTER`, payload: `horror`});
    expect(newState).toMatchObject(Object.assign({}, initialState, {genre: `horror`}));
  });
});
