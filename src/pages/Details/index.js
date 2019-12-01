import React from 'react';

import { Header } from '~/components';

import { Container } from './styles';

export default function Details() {
  const urlParams = new URLSearchParams(window.location.search);

  const CompanySymbol = urlParams.get('symbol');
  const CompanyName = urlParams.get('name');

  console.log(CompanySymbol);

  return (
    <Container>
      <Header title={CompanyName} subtitle={CompanySymbol} />

      <h1>Details Page</h1>
    </Container>
  );
}
