import React, { Component } from 'react';
import { array } from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { provideHooks } from 'redial';
import Story from './Story';
import { fetchTopStories } from './';

const List = styled.ul`
  list-style: none;
`;

@connect(state => state)
@provideHooks({
  fetch: ({ dispatch }) => dispatch(fetchTopStories()),
})
class TopStories extends Component {
  render() {
    const { stories } = this.props;

    return (
      <List>
        {stories.map(story => <Story key={story.id} {...story} />)}
      </List>
    );
  }
}

TopStories.propTypes = {
  stories: array.isRequired,
};

export default TopStories;
