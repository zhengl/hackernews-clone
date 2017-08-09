import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer as router } from 'react-router-redux';
import { apiMiddleware } from 'redux-api-middleware';
import endpointMiddleware from './api/endpointMiddleware';
import { routerMiddleware } from './router';
import stories from '../modules/stories';
import routes from './routes';
import logger from './logger/middleware';

export default (initialState, history) => {
  const middlewares = [apiMiddleware, thunk, routerMiddleware(history, routes)];

  if (__DEV__) {
    middlewares.push(logger);
  }

  if (process.env.BUILD_TARGET === 'server') {
    middlewares.unshift(endpointMiddleware);
  }

  const reducer = combineReducers({
    stories,
    router,
  });
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(reducer, initialState);
};
