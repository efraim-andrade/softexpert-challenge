import styled from 'styled-components';
import media from 'styled-media-query';

import { pxToRem } from '~/functions';
import { metrics } from '~/theme';

export const Container = styled.div`
  margin-bottom: ${metrics.baseSpacing(10)};

  ${media.lessThan('medium')`
    margin-top: -${pxToRem(10)};
  `}
`;
