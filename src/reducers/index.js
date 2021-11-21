import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {
  ERROR_HANDLER,
  GRABBED_CLASSES,
  GRABBED_CLIENT_REGISTERED_CLASSES,
  LOGGED_IN,
  LOGGED_OUT,
  REGISTERED_CLASS,
  UNREGISTERED_CLASS,
} from '../actions';

const initialState = {
  user: {
    id: undefined,
    username: '',
    isInstructor: undefined,
    createdClassess: [],
    registeredClasses: [],
  },
  classes: [],
  error: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR_HANDLER:
      console.log(action.payload.message);
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
    case REGISTERED_CLASS:
      return state;
    case GRABBED_CLIENT_REGISTERED_CLASSES:
      return {
        ...state,
        user: {
          ...state.user,
          registeredClasses: action.payload,
        },
      };
    case UNREGISTERED_CLASS:
      console.log(action.payload);
      return state;
    default:
      return state;
  }
};

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
