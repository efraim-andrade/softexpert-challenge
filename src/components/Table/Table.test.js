import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

import { windowResizeMock } from '~/functions';

import Table from './index';
import data from './mockData';

describe('Components - Table', () => {
  const history = createMemoryHistory();

  windowResizeMock();

  it('Should render correctly', () => {
    const { asFragment } = render(
      <Router history={history}>
        <Table tableData={data} allTableData={data} setTableData={() => {}} />
      </Router>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('Should change the table layout when window width is less than 720px', () => {
    window.resizeTo(720, 1000);

    const { getByTestId } = render(
      <Router history={history}>
        <Table tableData={data} allTableData={data} setTableData={() => {}} />
      </Router>
    );

    const layoutMobile = getByTestId('layout-mobile');

    expect(layoutMobile).toBeDefined();
  });

  it("Should be appears an message when don't have data", () => {
    const { getByText } = render(
      <Router history={history}>
        <Table tableData={[]} allTableData={[]} setTableData={() => {}} />
      </Router>
    );

    const theMessage = getByText('Nothing was found...');

    expect(theMessage).toBeDefined();
  });
});
