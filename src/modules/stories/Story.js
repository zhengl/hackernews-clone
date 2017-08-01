import React from 'react';
import { number, string } from 'prop-types';
import { Link } from '../../common/router';

const Story = ({ id, title }) => (
  <li>
    <Link to={`/items/${id}`}>{title}</Link>
  </li>
);

Story.propTypes = {
  id: number.isRequired,
  title: string.isRequired,
};

export default Story;
