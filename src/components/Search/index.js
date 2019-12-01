import React from 'react';
import PropTypes from 'prop-types';
import { Search as Icon } from 'styled-icons/feather/Search';

import { colors } from '~/theme';

import { Container } from './styles';

export default function Search({ allTableData, setTableData }) {
  function handleSearch({ inputText, tableData, setActualData }) {
    const filteredRows = tableData.filter(data => {
      const symbolUpper = data.symbol.toUpperCase();
      const nameUpper = data.name.toUpperCase();
      const inputTextUpper = inputText.toUpperCase();

      return (
        symbolUpper.indexOf(inputTextUpper) > -1 ||
        nameUpper.indexOf(inputTextUpper) > -1
      );
    });

    return setActualData(filteredRows.slice(0, 50));
  }

  return (
    <Container>
      <button onClick={() => {}} type="button">
        <Icon size="24" color={colors.primaryLight} />
      </button>

      <input
        onChange={event =>
          handleSearch({
            inputText: event.target.value,
            tableData: allTableData,
            setActualData: setTableData,
          })
        }
        placeholder="Search something..."
      />
    </Container>
  );
}

Search.propTypes = {
  setTableData: PropTypes.func.isRequired,
  allTableData: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
