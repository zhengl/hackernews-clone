import fetchData from '../fetchData';

const CHANGE_HISTORY = 'hackernews/stories/CHANGE_HISTORY';

export default function reducer(state = '', action = {}) {
  if (action.type === CHANGE_HISTORY) {
    return action.payload;
  }

  return state;
}

export function getUrl({ url }) {
  return { url };
}

export function changeHistory(url) {
  return (dispatch) => {
    fetchData(url, dispatch).then(() => {
      dispatch({
        type: CHANGE_HISTORY,
        payload: url,
      });
    });
  };
}

export { default as Link } from './Link';
export { default as Router } from './Router';
export { default as matchPath } from './matchPath';
