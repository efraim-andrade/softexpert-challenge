import React from 'react';
import { Router } from 'react-router-dom';
import matchMediaPolyfill from 'mq-polyfill';
import { createMemoryHistory } from 'history';
import { render, cleanup } from '@testing-library/react';

import Table from './index';
import data from './mockData';

describe('Components - Table', () => {
  const originalError = console.error;

  beforeAll(() => {
    matchMediaPolyfill(window);

    window.resizeTo = function resizeTo(width, height) {
      Object.assign(this, {
        innerWidth: width,
        innerHeight: height,
        outerWidth: width,
        outerHeight: height,
      }).dispatchEvent(new this.Event('resize'));
    };

    console.error = (...args) => {
      if (/Warning.*not wrapped in act/.test(args[0])) {
        return;
      }
      originalError.call(console, ...args);
    };
  });

  afterEach(cleanup);

  afterAll(() => {
    console.error = originalError;
  });

  const history = createMemoryHistory();

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
