import loggerCreator from './';

const logger = loggerCreator('ACTION');

export default () => next => (action) => {
  logger.log(action.type);
  logger.debug(action);
  next(action);
};
