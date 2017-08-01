import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import url from './router';
import stories from '../modules/stories';

const reducer = combineReducers({
  url,
  stories,
});
const createStoreWithMiddleware = applyMiddleware(apiMiddleware, thunk)(createStore);

export default initialState => createStoreWithMiddleware(reducer, initialState);
