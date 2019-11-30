import React from 'react';
import { Search as Icon } from 'styled-icons/feather/Search';

import { colors } from '~/theme';

import { Container } from './styles';

export default function Search() {
  return (
    <Container>
      <button onClick={() => {}} type="button">
        <Icon size="24" color={colors.primaryLight} />
      </button>

      <input placeholder="Search something..." />
    </Container>
  );
}
