import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { fonts, colors, metrics } from '~/theme';

export const Container = styled.div`
  margin-bottom: ${metrics.baseSpacing(2)};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div`
  > h2 {
    ${fonts.size3};
    color: ${colors.black};
    opacity: 0.3;
  }

  > h1 {
    ${fonts.size4};
    color: ${colors.black};
  }
`;

export const Right = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

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
  }
`;
