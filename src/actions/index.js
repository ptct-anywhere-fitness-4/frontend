import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';
axios.defaults.baseURL = 'https://bw-anywhere-fitness-backend.herokuapp.com/';

// export const REGISTER_USER = 'REGISTER_USER';
// export const LOGIN_USER = 'LOGIN_USER';
// export const LOGOUT_USER = 'LOGOUT_USER';
export const LOGGED_IN = 'SET_LOGGED_IN';
export const LOGGED_OUT = 'SET_LOGGED_OUT';
// export const GRAB_CLASSES = 'GRAB_CLASSES';
export const GRABBED_CLASSES = 'GRABBED_CLASSES';
export const ERROR_HANDLER = 'ERROR_HANDLER';

export const registerUser = (userInfo) => async (dispatch) => {
  try {
    // const createdUser = await axios.post('api/auth/register', userInfo);
    await axios.post('api/auth/register', userInfo);
    dispatch(loginUser(userInfo));
  } catch (err) {
    dispatch({
      type: ERROR_HANDLER,
      payload: { message: 'user already exists' },
    });
  }
};

export const loginUser = (userInfo) => async (dispatch) => {
  try {
    const loggedUserInfo = await axios.post('api/auth/login', userInfo);
    const { token, isInstructor, username } = loggedUserInfo.data;
    localStorage.setItem('token', token);
    dispatch({ type: LOGGED_IN, payload: { username, isInstructor } });
  } catch (err) {
    dispatch({
      type: ERROR_HANDLER,
      payload: { message: 'invalid username or password' },
    });
  }
};

export const logoutUser = () => {
  localStorage.removeItem('token');
  return { type: LOGGED_OUT };
};

export const grabClasses = () => async (dispatch) => {
  try {
    const classes = await axiosWithAuth().get('/api/client/classes/all');
    dispatch(grabbedClasses(classes.data));
  } catch (err) {
    return {
      type: ERROR_HANDLER,
      payload: { message: 'error grabbing classes' },
    };
  }
};

export const grabbedClasses = (classes) => {
  return { type: GRABBED_CLASSES, payload: classes };
};
