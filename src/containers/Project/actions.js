/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { LOAD_PAGES, LOAD_PAGES_SUCCESS, LOAD_PAGES_ERROR } from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_PAGES
 */
export function loadPages() {
  return {
    type: LOAD_PAGES,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_PAGES_SUCCESS passing the repos
 */
export function pagesLoaded(page) {
  return {
    type: LOAD_PAGES_SUCCESS,
    page,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_PAGES_ERROR passing the error
 */
export function pagesLoadingError(error) {
  return {
    type: LOAD_PAGES_ERROR,
    error,
  };
}
