import React from 'react';
import PropTypes from 'prop-types';
import { ArrowLeftCircle } from 'styled-icons/feather/ArrowLeftCircle';

import { Container, GoBack, Info } from './styles';

export default function Header({ title, subtitle }) {
  function isHome() {
    const currentPage = window.location.pathname;

    return currentPage === '/';
  }

  return (
    <Container>
      {!isHome() && (
        <GoBack to="/">
          <ArrowLeftCircle size="36" />
        </GoBack>
      )}

      <Info>
        <h2>{subtitle}</h2>

        <h1>{title}</h1>
      </Info>
    </Container>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
