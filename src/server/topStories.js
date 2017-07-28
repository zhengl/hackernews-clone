import fetch from 'isomorphic-fetch';

async function fetchStory(id) {
  const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
  return response.json();
}

export default async (ctx) => {
  const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
  const storyIds = await response.json();
  ctx.body = await Promise.all(storyIds.slice(0, 5).map(fetchStory));
};
