let createHistory;
if (process.env.BUILD_TARGET === 'client') {
  createHistory = require('history').createBrowserHistory;
} else {
  createHistory = require('history').createMemoryHistory;
}

module.exports = createHistory();
