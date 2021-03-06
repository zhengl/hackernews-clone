import React, { Component } from 'react';
import { array } from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { provideHooks } from 'redial';
import { media } from 'style-utils';
import Story from './Story';
import {
  getTopStories,
  fetchTopStories,
} from './';

const List = styled.ol`
  list-style: none;
  margin: 0 auto;
  padding: 8px;
  background-color: rgb(246, 246, 239);

  ${
  media.desktop`
      width: 85%;
    `
}
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
        {stories.map((story, index) => <Story key={story.id} index={index + 1} {...story} />)}
      </List>
    );
  }
}

export default TopStories;
