import { matchPath as matchRoute } from 'react-router';
import routes from '../routes';

export default function matchPath(url) {
  let result;
  routes.some((route) => {
    const match = matchRoute(url, route);
    if (match) {
      result = {
        component: route.component,
        params: match.params,
      };
      return true;
    }

    return false;
  });

  return result;
}
