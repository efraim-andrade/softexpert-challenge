import React from 'react';

import Search from '../Search';

import { Container, TableContainer, THeadLabel, TBodyItem } from './styles';

export default function Table() {
  function renderDesktop() {
    return (
      <TableContainer>
        <thead>
          <tr>
            <THeadLabel>Symbol</THeadLabel>
            <THeadLabel>Name</THeadLabel>
            <THeadLabel>Price</THeadLabel>
          </tr>
        </thead>

        <tbody>
          <tr>
            <TBodyItem>MMM</TBodyItem>
            <TBodyItem>3M Company</TBodyItem>
            <TBodyItem>$ 127.0</TBodyItem>
          </tr>
          <tr>
            <TBodyItem>MMM</TBodyItem>
            <TBodyItem>3M Company</TBodyItem>
            <TBodyItem>$ 127.0</TBodyItem>
          </tr>
          <tr>
            <TBodyItem>MMM</TBodyItem>
            <TBodyItem>3M Company</TBodyItem>
            <TBodyItem>$ 127.0</TBodyItem>
          </tr>
        </tbody>
      </TableContainer>
    );
  }

  return (
    <Container>
      <Search />

      {renderDesktop()}
    </Container>
  );
}
