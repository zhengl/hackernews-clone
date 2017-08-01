const logger = require('./')('ACTION');

module.exports = () => next => (action) => {
  logger.log(action.type);
  logger.debug(action);
  next(action);
};
