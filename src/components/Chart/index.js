import React from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { Container } from './styles';

export default function Chart({ data, title, type }) {
  const options = {
    type,

    title: {
      text: title,
    },

    yAxis: {
      title: {
        text: data.horizontalLabel,
      },
    },

    xAxis: {
      title: {
        text: 'Year',
      },
      categories: data.labels,
    },

    series: data.values,
  };

  return (
    <Container>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        constructorType="chart"
      />
    </Container>
  );
}

Chart.defaultProps = {
  data: [{}],
  type: 'spline',
};

Chart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape()),
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
};
