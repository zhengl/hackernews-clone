import Koa from 'koa';
import serve from 'koa-static';
import route from 'koa-route';
import page from './page';
import topStories from './topStories';
import story from './story';

const app = new Koa();

app.use(serve('./build/public'));
app.use(route.get('/api/top-stories', topStories));
app.use(route.get('/api/stories/:id', story));
app.use(page);

export default app.callback();
