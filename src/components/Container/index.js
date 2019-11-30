import styled from 'styled-components';

import { metrics } from '~/theme';
import { pxToRem } from '~/functions';

export default styled.div`
  margin: 0 auto;
  min-height: 100vh;
  padding-top: ${pxToRem(88)};
  max-width: ${metrics.maxWidth};
`;
