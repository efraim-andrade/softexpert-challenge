import React, { useEffect, useState } from 'react';

import Search from '../Search';

import {
  Container,
  TableContainer,
  THeadLabel,
  TBodyItem,
  CardsWrapper,
  Card,
  Row,
} from './styles';

export default function Table() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    function windowResizeListener() {
      window.addEventListener('resize', () => setWindowSize(window.innerWidth));
    }

    windowResizeListener();

    return () => {
      windowResizeListener();
    };
  }, [windowSize]);

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

  function renderMobile() {
    return (
      <CardsWrapper>
        <Card>
          <Row>
            <strong>Symbol</strong>

            <p>MMM</p>
          </Row>

          <Row>
            <strong>Name</strong>

            <p>3M Company</p>
          </Row>

          <Row>
            <strong>Price</strong>

            <p>$ 170.8</p>
          </Row>
        </Card>
      </CardsWrapper>
    );
  }

  return (
    <Container>
      <Search />

      {windowSize > 720 ? renderDesktop() : renderMobile()}
    </Container>
  );
}
