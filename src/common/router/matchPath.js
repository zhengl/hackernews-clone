import pathToRegexp from 'path-to-regexp';
import routes from '../routes';

function matchComponent(url, route) {
  const keys = [];
  const re = pathToRegexp(route.path, keys);
  const match = re.exec(url);

  if (!match) {
    return null;
  }

  const [, ...values] = match;
  return {
    component: route.component,
    params: keys.reduce((memo, key, index) => Object.assign({}, memo, {
      [key.name]: values[index],
    }), {}),
  };
}

export default function matchPath(url) {
  let result;
  routes.some((route) => {
    const match = matchComponent(url, route);
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
