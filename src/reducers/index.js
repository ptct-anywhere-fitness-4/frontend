import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { SOMETHING_RANDOM } from '../actions';

const initialState = {
  something: 'random',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SOMETHING_RANDOM:
      return { ...state, something: action.payload };
    default:
      return state;
  }
};

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
