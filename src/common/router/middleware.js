import { CALL_HISTORY_METHOD } from 'react-router-redux';
import fetchData from '../fetchData';

export default function routerMiddleware(history) {
  return store => next => async (action) => {
    if (action.type !== CALL_HISTORY_METHOD) {
      return next(action);
    }

    const { payload: { method, args } } = action;
    const [url] = args;
    if (url) {
      await fetchData(url, store.dispatch);
    }
    history[method](...args);
    return next(action);
  };
}
