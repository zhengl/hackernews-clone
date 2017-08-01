import fetch from 'isomorphic-fetch';
import { fetchStory } from './story';

async function fetchTopStories() {
  const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
  return response.json();
}

export default async (ctx) => {
  const storyIds = await fetchTopStories();
  ctx.body = await Promise.all(storyIds.slice(0, 5).map(fetchStory));
};
