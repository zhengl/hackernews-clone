import { trigger } from 'redial';
import { matchPath } from '../common/router';

export default async function fetchData(url, dispatch) {
  const match = matchPath(url);
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
