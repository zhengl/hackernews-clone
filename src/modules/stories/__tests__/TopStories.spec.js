import React from 'react';
import { shallow } from 'enzyme';
import TopStories from '../TopStories';
import Story from '../Story';

describe('TopStories', () => {
  let topStories;
  const stories = [
    {
      index: 0,
      id: 1,
      title: 'test-title-1',
      url: 'test-url-1',
      score: 10,
      descendants: 100,
    },
    {
      index: 1,
      id: 2,
      title: 'test-title2',
      url: 'test-url-2',
      score: 20,
      descendants: 200,
    },
  ];

  beforeEach(() => {
    topStories = shallow(<TopStories stories={stories} />);
  });

  it('should have Story', () => {
    expect(topStories.find(Story).length).toEqual(stories.length);
  });

  it('should pass props to each Story', () => {
    topStories.find(Story).forEach((story, index) => expect(story.props()).toEqual(stories[index]));
  });
});
