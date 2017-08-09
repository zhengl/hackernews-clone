import React, { Component } from 'react';
import { string, func, node } from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

@connect()
class Link extends Component {
  static defaultProps = {
    to: '',
    className: '',
    children: null,
    dispatch: () => {},
  }

  static propTypes = {
    to: string,
    className: string,
    children: node,
    dispatch: func,
  }

  onClick = (event) => {
    event.preventDefault();
    const { dispatch, to } = this.props;
    dispatch(push(to));
  }

  render() {
    const { to, className, children } = this.props;
    return (
      <a href={to} className={className} onClick={this.onClick}>{children}</a>
    );
  }
}

export default Link;
