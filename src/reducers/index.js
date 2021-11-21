import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {
  ERROR_HANDLER,
  GRABBED_CLASSES,
  LOGGED_IN,
  LOGGED_OUT,
} from '../actions';

const initialState = {
  user: {
    username: '',
    isInstructor: undefined,
    createdClassess: [],
  },
  classes: [],
  error: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR_HANDLER:
      return {
        ...state,
        error: action.payload.message,
      };
    case LOGGED_IN:
      return {
        ...state,
        user: { ...state.user, ...action.payload },
      };
    case LOGGED_OUT:
      return initialState;
    case GRABBED_CLASSES:
      return {
        ...state,
        classes: action.payload,
      };
    default:
      return state;
  }
};

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
