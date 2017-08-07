import React from 'react';
import styled from 'styled-components';
import { Link } from '../router';

const Header = styled.nav`
  width: 85%;
  margin: 0 auto;
  background-color: rgb(255, 102, 0);
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
