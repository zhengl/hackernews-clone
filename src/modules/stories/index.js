import { CALL_API } from 'redux-api-middleware';

const FETCH_TOP_STORIES_REQUEST = 'hackernews/stories/FETCH_TOP_STORIES_REQUEST';
const FETCH_TOP_STORIES_SUCCESS = 'hackernews/stories/FETCH_TOP_STORIES_SUCCESS';
const FETCH_TOP_STORIES_FAILURE = 'hackernews/stories/FETCH_TOP_STORIES_FAILURE';

export default function reducer(state = [], action = {}) {
  if (action.type === FETCH_TOP_STORIES_SUCCESS) {
    return action.payload;
  }

  return state;
}

export function fetchTopStories() {
  return {
    [CALL_API]: {
      endpoint: 'http://localhost:3000/api/top-stories',
      method: 'GET',
      types: [FETCH_TOP_STORIES_REQUEST, FETCH_TOP_STORIES_SUCCESS, FETCH_TOP_STORIES_FAILURE],
    },
  };
}
