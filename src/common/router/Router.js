import React, { Component } from 'react';
import { object, string, func } from 'prop-types';
import { connect } from 'react-redux';
import {
  getUrl,
  changeHistory,
  matchPath,
} from './';

let createHistory;
if (process.env.BUILD_TARGET === 'client') {
  createHistory = require('history').createBrowserHistory;
} else {
  createHistory = require('history').createMemoryHistory;
}

const history = createHistory();

@connect(getUrl)
class Router extends Component {
  static childContextTypes = {
    history: object.isRequired,
  }

  static propTypes = {
    url: string.isRequired,
    dispatch: func.isRequired,
  }

  getChildContext() {
    return { history };
  }

  componentDidMount() {
    history.listen(location => this.props.dispatch(changeHistory(location.pathname)));
  }

  render() {
    const { url } = this.props;
    const match = matchPath(url);
    if (!match) {
      return <h1>Error</h1>;
    }

    const RouteComponent = match.component;

    return <RouteComponent />;
  }
}

export default Router;
