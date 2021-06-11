import { Chart, Interval, Tooltip, Axis, Coordinate, Interaction } from 'bizcharts';
import React from 'react';

const cols = {
  percent: {
    formatter: val => {
      val = val * 100 + '%';
      return val;
    },
  },
};

const PieChart = props => {
  const { data, height = 400 } = props;

  return (
    <Chart height={height} data={data} scale={cols} interactions={['element-active']} autoFit>
      <Coordinate type="theta" radius={0.75} />
      <Tooltip showTitle={false} />
      <Axis visible={false} />
      <Interval
        position="percent"
        adjust="stack"
        color="item"
        style={{
          lineWidth: 1,
          stroke: '#fff',
        }}
        label={[
          'count',
          {
            content: data => {
              return `${data.item}: ${data.count}天`;
            },
          },
        ]}
      />
    </Chart>
  );
};

export default PieChart;
