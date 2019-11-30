import React from 'react';
import PropTypes from 'prop-types';
import { ArrowLeftCircle } from 'styled-icons/feather/ArrowLeftCircle';

import { Container, Left, Right } from './styles';

export default function Header({ title, subtitle }) {
  return (
    <Container>
      <Left>
        <h2>{subtitle}</h2>

        <h1>{title}</h1>
      </Left>

      <Right to="/">
        <ArrowLeftCircle size="32" />

        <span>Voltar</span>
      </Right>
    </Container>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
