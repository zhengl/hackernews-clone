import React from 'react';
import styled from 'styled-components';
import { Link } from '../router';
import { media } from '../style-utils';

const Header = styled.nav`
  margin: 0 auto;
  background-color: rgb(255, 102, 0);

  ${
  media.desktop`
      width: 85%;
    `
}
`;

const Logo = styled(Link)`
  vertical-align: middle;
`;

const Title = styled(Link)`
  color: #000;
  font-weight: bold;
  text-decoration: none;
  font-size: 12px;
`;

export default () => (
  <Header>
    <Logo>
      <img src="https://news.ycombinator.com/y18.gif" alt="logo" />
    </Logo>
    <Title>Hacker News</Title>
  </Header>
);
