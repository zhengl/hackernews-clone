import TopStories from '../modules/stories/TopStories';
import StoryDetails from '../modules/stories/StoryDetails';

export default [
  {
    path: '/items/:id',
    component: StoryDetails,
  },
  {
    path: '/',
    exact: true,
    component: TopStories,
  },
];
