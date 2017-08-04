import { CALL_API } from 'redux-api-middleware';

const FETCH_TOP_STORIES_REQUEST = 'hackernews/stories/FETCH_TOP_STORIES_REQUEST';
const FETCH_TOP_STORIES_SUCCESS = 'hackernews/stories/FETCH_TOP_STORIES_SUCCESS';
const FETCH_TOP_STORIES_FAILURE = 'hackernews/stories/FETCH_TOP_STORIES_FAILURE';

const FETCH_STORY_DETAILS_REQUEST = 'hackernews/stories/FETCH_STORY_DETAILS_REQUEST';
const FETCH_STORY_DETAILS_SUCCESS = 'hackernews/stories/FETCH_STORY_DETAILS_SUCCESS';
const FETCH_STORY_DETAILS_FAILURE = 'hackernews/stories/FETCH_STORY_DETAILS_FAILURE';

const initialState = {
  list: [],
  currentId: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_TOP_STORIES_SUCCESS:
      return Object.assign(
        {},
        state,
        {
          list: action.payload,
        },
      );
    case FETCH_STORY_DETAILS_SUCCESS: {
      const { id } = action.payload;
      const index = state.list.findIndex(story => story.id === id);
      return Object.assign(
        {},
        state,
        {
          list: [
            ...state.list.slice(0, index),
            action.payload,
            ...state.list.slice(index + 1)],
          currentId: id,
        },
      );
    }
    default:
      return state;
  }
}

export function getTopStories({ stories }) {
  return {
    stories: stories.list,
  };
}

export function getStoryDetails({ stories }) {
  return stories.list.find(story => story.id === stories.currentId);
}

export function fetchTopStories() {
  return {
    [CALL_API]: {
      endpoint: '/api/top-stories',
      method: 'GET',
      types: [
        FETCH_TOP_STORIES_REQUEST,
        FETCH_TOP_STORIES_SUCCESS,
        FETCH_TOP_STORIES_FAILURE,
      ],
    },
  };
}

export function fetchStoryDetails(id) {
  return {
    [CALL_API]: {
      endpoint: `/api/stories/${id}`,
      method: 'GET',
      types: [
        FETCH_STORY_DETAILS_REQUEST,
        FETCH_STORY_DETAILS_SUCCESS,
        FETCH_STORY_DETAILS_FAILURE,
      ],
    },
  };
}
