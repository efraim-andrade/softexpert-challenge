import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { pxToRem } from '~/functions';
import { colors, metrics, fonts } from '~/theme';

export const Container = styled.div`
  > p {
    margin-top: ${metrics.baseSpacing(3)};

    ${fonts.size2};
    text-align: center;
  }
`;

export const TableContainer = styled.table`
  width: 100%;

  border-collapse: separate;
  border-spacing: 0 ${metrics.baseSpacing(0.5)};

  > thead {
    background: ${colors.primary};
  }

  > tbody {
    margin-top: ${metrics.baseSpacing()};

    tr {
      cursor: pointer;
      transition: 0.3s;
      background: ${colors.rowBlueLight};

      &:hover {
        transform: scale(1.03);
      }

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
  max-width: ${pxToRem(200)};
  height: ${pxToRem(40)};

  ${fonts.size2};
  font-weight: 400;
  text-align: center;
`;

export const CardsWrapper = styled.div``;

export const Card = styled(Link)`
  display: block;
  margin-bottom: ${metrics.baseSpacing()};
  border-radius: ${metrics.borderRadius()};
  padding: ${metrics.baseSpacing(1.5)} ${metrics.baseSpacing(2)};

  transition: 0.3s;
  background: ${colors.rowBlueLight};

  &:hover {
    transform: translateX(1%);
  }

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
    max-width: 80%;

    ${fonts.size1};
    font-weight: 400;
    text-align: right;
    color: ${colors.black};
  }
`;
