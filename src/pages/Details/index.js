import React, { useEffect, useState } from 'react';

import api from '~/services/api';
import { colors } from '~/theme';
import { Header, Chart } from '~/components';

import { Container } from './styles';

export default function Details() {
  const [financialsData, setFinancialsData] = useState([{}]);

  const urlParams = new URLSearchParams(window.location.search);

  const CompanyName = urlParams.get('name');
  const CompanySymbol = urlParams.get('symbol');

  useEffect(() => {
    async function fetchFinancialsInfo() {
      try {
        const {
          data: { financials },
        } = await api.get('financials/income-statement/AAPL');

        const dates = financials
          .map(data => new Date(data.date).getFullYear())
          .reverse();

        const revenue = financials.map(data => Number(data.Revenue)).reverse();
        const operatingExpenses = financials
          .map(data => Number(data['Operating Expenses']))
          .reverse();
        const consolidatedIncome = financials
          .map(data => Number(data['Consolidated Income']))
          .reverse();
        const EBITDA = financials.map(data => Number(data.EBITDA)).reverse();

        const revenueGrowth = financials
          .map(data => Number(data['Revenue Growth']) * 100)
          .reverse();
        const EBITDAMargin = financials
          .map(data => Number(data['EBITDA Margin']) * 100)
          .reverse();

        setFinancialsData({
          chartOne: {
            labels: dates,
            horizontalLabel: 'Values in $',
            values: [
              {
                name: 'Revenue',
                data: revenue,
                color: colors.primary,
              },
              {
                name: 'Operating Expenses',
                data: operatingExpenses,
                color: colors.danger,
              },
              {
                name: 'Consolidated Income',
                data: consolidatedIncome,
                color: colors.success,
              },
              {
                name: 'EBITDA',
                data: EBITDA,
                color: colors.warning,
              },
            ],
          },
          chartTwo: {
            labels: dates,
            horizontalLabel: 'Values in %',
            values: [
              {
                name: 'Revenue Growth',
                data: revenueGrowth,
                color: colors.primary,
              },
              {
                name: 'EBITDA Margin',
                data: EBITDAMargin,
                color: colors.warning,
              },
            ],
          },
        });
        console.log('financials', financials);
      } catch (err) {
        console.log(err);
      }
    }

    fetchFinancialsInfo();
  }, []);

  return (
    <Container>
      <Header title={CompanyName} subtitle={CompanySymbol} />

      <Chart
        data={financialsData.chartOne}
        title="Revenue / Operating Expenses / Consolidated Income / EBITDA"
      />

      <Chart
        data={financialsData.chartTwo}
        title="Revenue Growth / EBITDA Margin"
      />
    </Container>
  );
}
