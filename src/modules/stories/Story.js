import React from 'react';
import { number, string } from 'prop-types';
import styled from 'styled-components';
import { Link } from '../../common/router';

const Item = styled.li`
  position: relative;
  margin-bottom: 8px;
  padding-left: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Index = styled.span`
  position: absolute;
  left: 0;
  font-size: 12px;
  color: #828282;
  line-height: 17px;
  margin-right: 8px;
`;

const TitleLink = styled.a`
  font-size: 12px;
  color: #000;
  text-decoration: none;
`;

const Title = styled.h2`
  font-size: 12px;
  color: #000;
`;

const Details = styled.p`
  margin: 0;
`;

const Points = styled.span`
  color: #828282;
  font-size: 7px;
`;

const Comments = styled(Link)`
  color: #828282;
  font-size: 7px;
  text-decoration: none;
  margin-left: 8px;

  &:before {
    content: '|';
    margin-right: 8px;
  }
`;

const Story = ({ index, id, url, title, score, descendants }) => (
  <Item>
    <Index>{`${index}.`}</Index>
    { url ?
      <TitleLink href={url}>{title}</TitleLink> :
      <Title>{title}</Title>
    }
    <Details>
      <Points>{`${score} points`}</Points>
      {
        descendants &&
          <Comments to={`/items/${id}`}>{`${descendants} comments`}</Comments>
      }
    </Details>
  </Item>
);

Story.defaultProps = {
  url: '',
  descendants: undefined,
};

Story.propTypes = {
  index: number.isRequired,
  id: number.isRequired,
  title: string.isRequired,
  url: string,
  score: number.isRequired,
  descendants: number,
};

export default Story;
