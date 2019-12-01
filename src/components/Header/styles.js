import styled from 'styled-components';
import { Link } from 'react-router-dom';
import media from 'styled-media-query';

import { fonts, colors, metrics } from '~/theme';

export const Container = styled.div`
  margin-bottom: ${metrics.baseSpacing(2)};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div`
  width: 100%;

  > h2 {
    ${fonts.size3};
    color: ${colors.secondary};
    opacity: 0.6;

    ${media.lessThan('medium')`
      ${fonts.size1};
    `}
  }

  > h1 {
    max-width: 90%;

    ${fonts.size4};
    color: ${colors.black};

    ${media.lessThan('medium')`
      ${fonts.size2};
    `}
  }
`;

export const Right = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  ${media.lessThan('medium')`
    flex-direction: column;
  `}

  &:hover {
    > svg {
      transform: translateX(-10%);
    }
  }

  &:visited {
    color: ${colors.black};
  }

  > svg {
    margin-right: ${metrics.baseSpacing()};

    transition: 0.3s;

    ${media.lessThan('medium')`
      margin-right: 0;
    `}
  }

  > span {
    ${media.lessThan('medium')`
      ${fonts.size0};
    `}
  }
`;
