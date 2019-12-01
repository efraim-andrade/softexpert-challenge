import styled from 'styled-components';
import media from 'styled-media-query';

import { pxToRem } from '~/functions';
import { metrics, colors } from '~/theme';

export const Container = styled.div`
  margin-left: auto;
  width: ${pxToRem(300)};
  height: ${pxToRem(40)};
  padding: ${metrics.baseSpacing(1.5)};
  margin-bottom: ${metrics.baseSpacing()};
  border: 1px solid ${colors.primaryLight};
  border-radius: ${metrics.borderRadius()};

  display: flex;
  align-items: center;

  ${media.lessThan('medium')`
    width: 100%;
  `}

  > button {
    border: none;

    cursor: pointer;
    background: transparent;

    &:hover {
      > svg {
        transform: rotate(10deg) translateX(-8%);
      }
    }

    > svg {
      margin-right: ${metrics.baseSpacing()};

      transition: 0.3s;
    }
  }

  > input {
    width: 100%;
    border: none;

    color: ${colors.primary};

    &::placeholder {
      color: ${colors.primaryLight};
      opacity: 0.6;
    }
  }
`;
