import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import url from './router';
import stories from '../modules/stories';

const middlewares = [apiMiddleware, thunk];

if (__DEV__) {
  middlewares.push(require('./logger/middleware'));
}

const reducer = combineReducers({
  url,
  stories,
});
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default initialState => createStoreWithMiddleware(reducer, initialState);
