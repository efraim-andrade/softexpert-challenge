import styled from 'styled-components';

import { pxToRem } from '~/functions';
import { colors, metrics, fonts } from '~/theme';

export const Container = styled.div``;

export const TableContainer = styled.table`
  width: 100%;

  border-collapse: separate;
  border-spacing: 0 ${metrics.baseSpacing(0.5)};

  > thead {
    background: ${colors.primary};
  }

  > tbody {
    margin-top: ${metrics.baseSpacing()};

    > tr {
      background: ${colors.rowBlueLight};

      &:nth-child(2n) {
        background: ${colors.rowBlueDark};
      }
    }
  }
`;

export const THeadLabel = styled.th`
  height: ${pxToRem(40)};

  ${fonts.size2};
  font-weight: 700;
  color: ${colors.white};
  text-transform: capitalize;

  &:first-child {
    border-top-left-radius: ${metrics.borderRadius()};
  }

  &:last-child {
    border-top-right-radius: ${metrics.borderRadius()};
  }
`;

export const TBodyItem = styled.td`
  ${fonts.size2};
  font-weight: 400;
  text-align: center;
`;

export const CardsWrapper = styled.div``;

export const Card = styled.div`
  margin-bottom: ${metrics.baseSpacing()};
  border-radius: ${metrics.borderRadius()};
  padding: ${metrics.baseSpacing(1.5)} ${metrics.baseSpacing(2)};

  background: ${colors.rowBlueLight};

  &:nth-child(2n) {
    background: ${colors.rowBlueDark};
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + div {
    margin-top: ${metrics.baseSpacing()};
  }

  > strong {
    ${fonts.size1};
    font-weight: 700;
    color: ${colors.grey};
    text-transform: capitalize;
  }

  > p {
    ${fonts.size1};
    font-weight: 400;
    text-align: right;
  }
`;
