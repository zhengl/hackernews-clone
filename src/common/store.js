import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer as router } from 'react-router-redux';
import history from './router/history';
import { apiMiddleware } from 'redux-api-middleware';
import { endpointMiddleware } from './api';
import { routerMiddleware } from './router';
import stories from '../modules/stories';

const middlewares = [endpointMiddleware, apiMiddleware, thunk, routerMiddleware(history)];

if (__DEV__) {
  middlewares.push(require('./logger/middleware'));
}

const reducer = combineReducers({
  stories,
  router,
});
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default initialState => createStoreWithMiddleware(reducer, initialState);
