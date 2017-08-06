import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer as router } from 'react-router-redux';
import { apiMiddleware } from 'redux-api-middleware';
import endpointMiddleware from './api/middleware';
import { routerMiddleware } from './router';
import stories from '../modules/stories';

export default (initialState, history) => {
  const middlewares = [endpointMiddleware, apiMiddleware, thunk, routerMiddleware(history)];

  if (__DEV__) {
    middlewares.push(require('./logger/middleware'));
  }

  const reducer = combineReducers({
    stories,
    router,
  });
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(reducer, initialState);
};
