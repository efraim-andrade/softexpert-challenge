import React, { useEffect, useState } from 'react';
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

  useEffect(() => {
    function getPageHeight() {
      return document.body.offsetHeight - window.innerHeight;
    }

    function getBottomOffset() {
      return getPageHeight() - window.scrollY;
    }

    function fetchMoreCompanies() {
      setTableData(allTableData.slice(0, 30 * page));
      page += 1;
    }

    function scrollHandlers() {
      window.addEventListener('scroll', () => {
        if (getBottomOffset() <= 250 && !isLoading) {
          fetchMoreCompanies();
        }
      });
    }

    scrollHandlers();

    return () => {
      scrollHandlers();
    };
  }, []);

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
        <Table
          tableData={tableData}
          allTableData={allTableData}
          setTableData={setTableData}
        />
      )}
    </Container>
  );
}
