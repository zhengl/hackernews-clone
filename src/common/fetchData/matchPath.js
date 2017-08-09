import { matchPath as matchRoute } from 'react-router';

export default function matchPath(url, routes) {
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
