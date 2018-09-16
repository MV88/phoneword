import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import phoneword from '../reducers/phoneword';

const store = createStore(
  combineReducers({
    phoneword: phoneword
  }),
  applyMiddleware(
    thunk
  )
);

export default store;
