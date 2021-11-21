import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';
axios.defaults.baseURL = 'https://bw-anywhere-fitness-backend.herokuapp.com/';

export const LOGGED_IN = 'SET_LOGGED_IN';
export const LOGGED_OUT = 'SET_LOGGED_OUT';
export const GRABBED_CLASSES = 'GRABBED_CLASSES';
export const GRABBED_CLIENT_REGISTERED_CLASSES =
  'GRABBED_CLIENT_REGISTERED_CLASSES';
export const REGISTERED_CLASS = 'REGISTERED_CLASS';
export const UNREGISTERED_CLASS = 'UNREGISTERED_CLASS';
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
    const { token, isInstructor, username, id } = loggedUserInfo.data;
    localStorage.setItem('token', token);
    dispatch({ type: LOGGED_IN, payload: { username, isInstructor, id } });
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
    dispatch({ type: GRABBED_CLASSES, payload: classes.data });
  } catch (err) {
    dispatch({
      type: ERROR_HANDLER,
      payload: { message: 'error grabbing classes' },
    });
  }
};

export const registerClass = (clientId, classId) => async (dispatch) => {
  try {
    await axiosWithAuth().post(`/api/client/${clientId}/classes/${classId}`);
    return { type: REGISTERED_CLASS };
  } catch (err) {
    dispatch({
      type: ERROR_HANDLER,
      payload: { message: 'error registering to class' },
    });
  }
};

export const grabClientRegisteredClasses = (clientId) => async (dispatch) => {
  try {
    const registeredClasses = await axiosWithAuth().get(
      `/api/client/${clientId}/classes/registered`
    );
    dispatch({
      type: GRABBED_CLIENT_REGISTERED_CLASSES,
      payload: registeredClasses.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR_HANDLER,
      payload: { message: 'error grabbing clients registered classes' },
    });
  }
};

export const unregisterClass = (clientId, classId) => async (dispatch) => {
  try {
    await axiosWithAuth().delete(`/api/client/${clientId}/classes/${classId}`);
    dispatch({ type: UNREGISTERED_CLASS });
  } catch (err) {
    dispatch({
      type: ERROR_HANDLER,
      payload: { message: 'error unregistering user' },
    });
  }
};
