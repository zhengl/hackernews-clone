import { CALL_API } from 'redux-api-middleware';

export default () => next => (action) => {
  if (action[CALL_API]) {
    if (process.env.BUILD_TARGET === 'server') {
      action[CALL_API].endpoint = `http://localhost:${process.env.PORT || 3000}${action[CALL_API].endpoint}`; // eslint-disable-line no-param-reassign
    }
  }

  return next(action);
};
