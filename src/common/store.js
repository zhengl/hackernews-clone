import { createStore, applyMiddleware, combineReducers } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import stories from '../modules/stories';

const reducer = combineReducers({
  stories,
});
const createStoreWithMiddleware = applyMiddleware(apiMiddleware)(createStore);

export default initialState => createStoreWithMiddleware(reducer, initialState);
