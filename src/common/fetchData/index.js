import { trigger } from 'redial';
import matchPath from './matchPath';

export default async function fetchData(url, routes, dispatch) {
  const match = matchPath(url, routes);
  if (!match) {
    return;
  }
  const { component, params } = match;
  const locals = {
    dispatch,
    params,
  };
  await trigger('fetch', component, locals);
}
