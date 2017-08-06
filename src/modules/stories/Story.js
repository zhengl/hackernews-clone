import React from 'react';
import { number, string } from 'prop-types';
import styled from 'styled-components';
import { Link } from '../../common/router';

const TitleLink = styled.a`
  color: red;
`;

const Title = styled.h2`
  color: blue;
`;

const Story = ({ id, url, title, descendants }) => (
  <li>
    { url ?
      <TitleLink href={url}>{title}</TitleLink> :
      <Title>{title}</Title>
    }
    <Link to={`/items/${id}`}>{`${descendants} comments`}</Link>
  </li>
);

Story.defaultProps = {
  url: '',
};

Story.propTypes = {
  id: number.isRequired,
  title: string.isRequired,
  url: string,
  descendants: number.isRequired,
};

export default Story;
