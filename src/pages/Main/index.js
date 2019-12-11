import React, { useEffect, useState } from 'react';
import { Eclipse } from 'react-loading-io';
import { useDispatch, useSelector } from 'react-redux';

import api from '~/services/api';
import { colors } from '~/theme';
import { Header, Table } from '~/components';
import { addEnterprises } from '~/store/modules/enterprises/actions';

import { Container, LoaderContainer } from './styles';

let allTableData = [];
let page = 3;

export default function Main() {
  const dispatch = useDispatch();

  const enterprises = useSelector(state => state.enterprises.data);

  const [tableData, setTableData] = useState(enterprises.slice(0, 30));
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

        dispatch(addEnterprises(symbolsList));

        setTableData(symbolsList.slice(0, 30));
      } catch (err) {
        alert('Algo deu errado ao buscar os dados!');
      } finally {
        setIsLoading(false);
      }
    }

    if (enterprises.length === 0) {
      fetchCompanies();
    } else {
      allTableData = enterprises;
    }
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
