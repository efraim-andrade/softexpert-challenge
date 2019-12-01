import React, { useEffect, useState, useMemo } from 'react';
import { Eclipse } from 'react-loading-io';

import api from '~/services/api';
import { Header, Table } from '~/components';
import { colors } from '~/theme';

import { Container, LoaderContainer } from './styles';

let allTableData = [];
let page = 3;

export default function Main() {
  const [tableData, setTableData] = useState([{}]);
  const [isLoading, setIsLoading] = useState(false);

  function getPageHeight() {
    return document.body.offsetHeight - window.innerHeight;
  }

  function getBottomOffset() {
    return getPageHeight() - window.scrollY;
  }

  function handleSearch(inputText) {
    const filteredRows = allTableData.filter(data => {
      const symbolUpper = data.symbol.toUpperCase();
      const nameUpper = data.name.toUpperCase();
      const inputTextUpper = inputText.toUpperCase();

      return (
        symbolUpper.indexOf(inputTextUpper) > -1 ||
        nameUpper.indexOf(inputTextUpper) > -1
      );
    });

    return setTableData(filteredRows.slice(0, 50));
  }

  useEffect(() => {
    function fetchMoreCompanies() {
      setTableData(allTableData.slice(0, 30 * page));
      page += 1;
    }

    function scrollHandlers() {
      window.addEventListener('scroll', () => {
        if (getBottomOffset() <= 200 && !isLoading) {
          fetchMoreCompanies();
        }
      });
    }

    scrollHandlers();

    return () => {
      scrollHandlers();
    };
  }, [page]);

  useEffect(() => {
    async function fetchCompanies() {
      setIsLoading(true);

      try {
        const {
          data: { symbolsList },
        } = await api.get('company/stock/list');

        allTableData = symbolsList;
        setTableData(symbolsList.slice(0, 30));
      } catch (err) {
        alert('Algo deu errado ao buscar os dados!');
      } finally {
        setIsLoading(false);
      }
    }

    fetchCompanies();
  }, []);

  return (
    <Container>
      <Header subtitle="SoftExpert" title="Stock Exchange Challenge" />

      {isLoading ? (
        <LoaderContainer>
          <Eclipse size={96} color={colors.primary} />
        </LoaderContainer>
      ) : (
        <Table tableData={tableData} handleSearch={handleSearch} />
      )}
    </Container>
  );
}
