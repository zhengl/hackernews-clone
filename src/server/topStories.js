import fetch from 'isomorphic-fetch';
import { fetchStory } from './story';

const URL = 'https://hacker-news.firebaseio.com/v0/topstories.json';

async function fetchTopStories() {
  const response = await fetch(URL);
  return response.json();
}

export default async (ctx) => {
  if (__DEV__) {
    require('../common/logger')('TOP_STORIES').log(`Fetching data from ${URL}`);
  }
  const storyIds = await fetchTopStories();
  ctx.body = await Promise.all(storyIds.slice(0, 30).map(fetchStory));
};
