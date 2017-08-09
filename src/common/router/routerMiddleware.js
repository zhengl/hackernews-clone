import { CALL_HISTORY_METHOD } from 'react-router-redux';
import fetchData from 'fetch';

export default function routerMiddleware(history, routes) {
  return store => next => async (action) => {
    if (action.type !== CALL_HISTORY_METHOD) {
      return next(action);
    }

    const { payload: { method, args } } = action;
    const [url] = args;
    if (url) {
      await fetchData(url, routes, store.dispatch);
    }
    history[method](...args);
    return next(action);
  };
}
