import React from 'react';

import { Header, Table } from '~/components';

import { Container } from './styles';

export default function Main() {
  return (
    <Container>
      <Header subtitle="SoftExpert" title="Stock Exchange Challenge" />

      <Table />
    </Container>
  );
}
