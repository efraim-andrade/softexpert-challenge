import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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

export default function Table({ tableData, allTableData, setTableData }) {
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
            <tr
              key={item.symbol}
              onClick={() =>
                (window.location.href = `${window.location.origin}/details?symbol=${item.symbol}&name=${item.name}`)
              }
            >
              {Object.values(item).map((field, index) => (
                <TBodyItem key={`field ${index} ${field}`}>
                  {typeof field === 'number' ? `$ ${field}` : field}
                </TBodyItem>
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
        {tableData.map((item, index) => (
          <Card
            key={`card-${index}`}
            to={`/details?symbol=${item.symbol}&name=${item.name}`}
          >
            {Object.keys(item).map(field => (
              <Row key={field}>
                <strong>{field}</strong>

                <p>{field === 'price' ? `$ ${item[field]}` : item[field]}</p>
              </Row>
            ))}
          </Card>
        ))}
      </CardsWrapper>
    );
  }

  function handleRender() {
    return windowSize > 720 ? renderDesktop() : renderMobile();
  }

  return (
    <Container>
      <Search allTableData={allTableData} setTableData={setTableData} />

      {tableData.length > 0 ? handleRender() : <p>Nothing was found...</p>}
    </Container>
  );
}

Table.defaultProps = {
  tableData: [{}],
};

Table.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.shape()),
};
