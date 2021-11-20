import axios from 'axios';

export const SOMETHING_RANDOM = 'SOMETHING_RANDOM';
export const SET_LOGGED_IN = "SET_LOGGED_IN";
export const SET_LOGGED_OUT = "SET_LOGGED_OUT";

export const somethingRandom = () => {
  return { type: SOMETHING_RANDOM, payload: 'awesome' };
};

export const setLoggedIn = () => {
  return { type: SET_LOGGED_IN };
};

export const setLoggedOut = () => {
  return { type: SET_LOGGED_OUT };
};
