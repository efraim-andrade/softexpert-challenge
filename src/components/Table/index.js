import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Search from '../Search';

import {
  Container,
  TableContainer,
  THeadLabel,
  TBodyItem,
  CardsWrapper,
  Card,
  Row,
} from './styles';

export default function Table({ tableData }) {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    function windowResizeListener() {
      window.addEventListener('resize', () => setWindowSize(window.innerWidth));
    }

    windowResizeListener();

    return () => {
      windowResizeListener();
    };
  }, [windowSize]);

  function renderDesktop() {
    return (
      <TableContainer>
        <thead>
          <tr>
            {Object.keys(tableData[0]).map(label => (
              <THeadLabel key={label}>{label}</THeadLabel>
            ))}
          </tr>
        </thead>

        <tbody>
          {tableData.map(item => (
            <tr key={item.symbol}>
              {Object.values(item).map(field => (
                <TBodyItem key={field}>{field}</TBodyItem>
              ))}
            </tr>
          ))}
        </tbody>
      </TableContainer>
    );
  }

  function renderMobile() {
    return (
      <CardsWrapper>
        {tableData.map((row, index) => (
          <Card key={`card-${index}`}>
            {Object.keys(row).map(field => (
              <Row key={field}>
                <strong>{field}</strong>

                <p>{row[field]}</p>
              </Row>
            ))}
          </Card>
        ))}
      </CardsWrapper>
    );
  }

  return (
    <Container>
      <Search />

      {windowSize > 720 ? renderDesktop() : renderMobile()}
    </Container>
  );
}

Table.defaultProps = {
  tableData: [{}],
};

Table.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.shape()),
};
