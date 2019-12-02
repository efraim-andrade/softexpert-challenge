import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

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
  const history = useHistory();

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      return setWindowSize(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
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
                history.push(
                  `/details?symbol=${item.symbol}&name=${item.name}&price=${item.price}`
                )
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
      <CardsWrapper data-testid="layout-mobile">
        {tableData.map((item, index) => (
          <Card
            key={`card-${index}`}
            to={`/details?symbol=${item.symbol}&name=${item.name}&price=${item.price}`}
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
  allTableData: [{}],
};

Table.propTypes = {
  setTableData: PropTypes.func.isRequired,
  tableData: PropTypes.arrayOf(PropTypes.shape()),
  allTableData: PropTypes.arrayOf(PropTypes.shape()),
};
