import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object, string, node } from 'prop-types';

@connect()
class Link extends Component {
  static contextTypes = {
    history: object.isRequired,
  }

  static defaultProps = {
    to: '',
    children: null,
  }

  static propTypes = {
    to: string,
    children: node,
  }

  onClick = (event) => {
    event.preventDefault();
    this.context.history.push(this.props.to);
  }

  render() {
    const { to, children } = this.props;
    return (
      <a href={to} onClick={this.onClick}>{children}</a>
    );
  }
}

export default Link;
