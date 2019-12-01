import React from 'react';
import PropTypes from 'prop-types';
import { Search as Icon } from 'styled-icons/feather/Search';

import { colors } from '~/theme';

import { Container } from './styles';

export default function Search({ handleSearch }) {
  return (
    <Container>
      <button onClick={() => {}} type="button">
        <Icon size="24" color={colors.primaryLight} />
      </button>

      <input
        onChange={event => handleSearch(event.target.value)}
        placeholder="Search something..."
      />
    </Container>
  );
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
