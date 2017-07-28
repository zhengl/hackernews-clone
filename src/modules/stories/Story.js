import React from 'react';
import { string } from 'prop-types';

const Story = ({ title }) => (
  <li>
    <p>{title}</p>
  </li>
);

Story.propTypes = {
  title: string.isRequired,
};

export default Story;
