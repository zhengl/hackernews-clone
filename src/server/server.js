import Koa from 'koa';
import serve from 'koa-static';
import page from './page';

const app = new Koa();

app.use(serve('./build/public'));
app.use(page);

export default app.callback();
