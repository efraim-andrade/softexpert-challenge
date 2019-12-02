import React from 'react';
import PropTypes from 'prop-types';
import { ArrowLeftCircle } from 'styled-icons/feather/ArrowLeftCircle';

import { Container, GoBack, Info } from './styles';

export default function Header({ title, subtitle, price }) {
  function isHome() {
    const currentPage = window.location.pathname;

    return currentPage === '/';
  }

  return (
    <Container>
      {!isHome() && (
        <GoBack to="/" data-testid="goBack">
          <ArrowLeftCircle size="36" />
        </GoBack>
      )}

      <Info>
        {price ? <h2>{`${subtitle} - $ ${price}`}</h2> : <h2>{subtitle}</h2>}

        <h1>{title}</h1>
      </Info>
    </Container>
  );
}

Header.defaultProps = {
  price: 0,
};

Header.propTypes = {
  price: PropTypes.number,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
