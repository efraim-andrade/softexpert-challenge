import React from 'react';

import { Header } from '~/components';

import { Container } from './styles';

export default function Main() {
  return (
    <Container>
      <Header subtitle="SoftExpert" title="Stock Exchange Challenge" />

      <h1>Main Page</h1>
    </Container>
  );
}
