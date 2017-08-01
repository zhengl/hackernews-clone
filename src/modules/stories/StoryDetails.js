import React, { Component } from 'react';
import { string } from 'prop-types';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import {
  getStoryDetails,
  fetchStoryDetails,
} from './';

@connect(getStoryDetails)
@provideHooks({
  fetch: ({ dispatch, params: { id } }) => dispatch(fetchStoryDetails(id)),
})
class StoryDetails extends Component {
  static propTypes = {
    title: string.isRequired,
  }

  render() {
    const { title } = this.props;

    return (
      <h1>{title}</h1>
    );
  }
}

export default StoryDetails;
