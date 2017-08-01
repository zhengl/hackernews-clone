import React, { Component } from 'react';
import { array } from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { provideHooks } from 'redial';
import Story from './Story';
import {
  getTopStories,
  fetchTopStories,
} from './';

const List = styled.ul`
  list-style: none;
`;

@connect(getTopStories)
@provideHooks({
  fetch: ({ dispatch }) => dispatch(fetchTopStories()),
})
class TopStories extends Component {
  static propTypes = {
    stories: array.isRequired,
  }

  render() {
    const { stories } = this.props;

    return (
      <List>
        {stories.map(story => <Story key={story.id} {...story} />)}
      </List>
    );
  }
}

export default TopStories;
