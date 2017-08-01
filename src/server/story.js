import fetch from 'isomorphic-fetch';

export async function fetchStory(id) {
  const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
  return response.json();
}

export default async (ctx, id) => {
  ctx.body = await fetchStory(id);
};
