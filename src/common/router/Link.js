import React, { Component } from 'react';
import { string, func, node } from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

@connect()
class Link extends Component {
  static defaultProps = {
    to: '',
    children: null,
  }

  static propTypes = {
    to: string,
    children: node,
    dispatch: func.isRequired,
  }

  onClick = (event) => {
    event.preventDefault();
    const { dispatch, to } = this.props;
    dispatch(push(to));
  }

  render() {
    const { to, children } = this.props;
    return (
      <a href={to} onClick={this.onClick}>{children}</a>
    );
  }
}

export default Link;
