import React, { useEffect, useState } from 'react';

import api from '~/services/api';
import { Header, Table } from '~/components';

import { Container } from './styles';

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

  useEffect(() => {
    function fetchMoreCompanies() {
      page += 1;

      setTableData(allTableData.slice(0, 30 * page));
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
      {/* <p>{allTableData}</p> */}
      <Header subtitle="SoftExpert" title="Stock Exchange Challenge" />

      <Table tableData={tableData} />
    </Container>
  );
}
