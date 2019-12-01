import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Search from './index';
import MockData from './mockData';

describe('Components - Search', () => {
  let tableData = MockData;

  function setTableData(data) {
    tableData = data;
  }

  it('Should be able to search by symbol', () => {
    const { getByPlaceholderText } = render(
      <Search allTableData={MockData} setTableData={setTableData} />
    );

    const input = getByPlaceholderText('Search something...');

    fireEvent.change(input, { target: { value: 'MMM' } });

    expect(tableData.length).toBe(1);
  });

  it('Should be able to search by name', () => {
    const { getByPlaceholderText } = render(
      <Search allTableData={MockData} setTableData={setTableData} />
    );

    const input = getByPlaceholderText('Search something...');

    fireEvent.change(input, { target: { value: '3M Company' } });

    expect(tableData.length).toBe(1);
  });
});
