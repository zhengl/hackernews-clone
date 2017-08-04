import React from 'react';
import { number, string } from 'prop-types';
import { parse } from 'url';
import { Link } from '../../common/router';

const Story = ({ id, url, title, descendants }) => (
  <li>
    <a href={url}>{title}</a>
    <Link to={`/items/${id}`}>{`${descendants} comments`}</Link>
  </li>
);

Story.propTypes = {
  id: number.isRequired,
  title: string.isRequired,
};

export default Story;
