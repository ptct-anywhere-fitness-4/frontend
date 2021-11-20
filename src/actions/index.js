import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';

export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGGED_IN = 'SET_LOGGED_IN';
export const LOGGED_OUT = 'SET_LOGGED_OUT';
export const ERROR_HANDLER = 'ERROR_HANDLER';

export const loginUser = (userInfo) => async (dispatch) => {
  try {
    const loggedUserInfo = await axios.post(
      'http://localhost:9000/api/auth/login',
      userInfo
    );
    const { token, isInstructor, username } = loggedUserInfo.data;
    localStorage.setItem('token', token);
    dispatch({ type: LOGGED_IN, payload: { username, isInstructor } });
  } catch (err) {
    dispatch({ type: ERROR_HANDLER, payload: err });
  }
};

export const registerUser = (userInfo) => async (dispatch) => {
  try {
    const createdUser = await axios.post(
      'http://localhost:9000/api/auth/register',
      userInfo
    );
    dispatch(loginUser(userInfo));
  } catch (err) {
    dispatch({ type: ERROR_HANDLER, payload: err });
  }
};
