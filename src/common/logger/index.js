import logger from 'logatim';

logger.setLevel(process.env.LOG_LEVEL || 'info');

function formatMessage(module, message) {
  return `[${module}] ${JSON.stringify(message, null, 2)}`;
}

export default module => ({
  debug: message => logger.debug(formatMessage(module, message)),
  log: message => logger.green.info(formatMessage(module, message)),
  warn: message => logger.yellow.warn(formatMessage(module, message)),
  error: message => logger.red.error(formatMessage(module, message)),
});
