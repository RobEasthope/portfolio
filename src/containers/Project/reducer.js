/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import { LOAD_PAGES_SUCCESS, LOAD_PAGES, LOAD_PAGES_ERROR } from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  pages: null,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PAGES:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['pages', 'repositories'], false);
    case LOAD_PAGES_SUCCESS:
      return state.setIn(['pages', 'repositories'], action.repos).set('loading', false);
    case LOAD_PAGES_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
