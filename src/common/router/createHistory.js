let createHistory;
if (process.env.BUILD_TARGET === 'client') {
  createHistory = require('history').createBrowserHistory;
} else {
  createHistory = require('history').createMemoryHistory;
}

module.exports = initialEntry => createHistory({
  initialEntries: [initialEntry],
  initialIndex: 0,
});
