import fetch from 'isomorphic-fetch';

const URL = (strings, id) => `https://hacker-news.firebaseio.com/v0/item/${id}.json`;

export async function fetchStory(id) {
  const response = await fetch(URL`${id}`);
  return response.json();
}

export default async (ctx, id) => {
  if (__DEV__) {
    require('../common/logger')('STORY_DETAILS').log(`Fetching data from ${URL`${id}`}`);
  }
  ctx.body = await fetchStory(id);
};
