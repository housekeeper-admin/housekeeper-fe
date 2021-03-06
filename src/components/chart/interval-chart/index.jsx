import * as React from "react";
import { Chart, Interval } from "bizcharts";

const IntervalChart = (props) => {
  const {
    data, row, col, height = 300
  } = props;

  return (
    <Chart
      height={height}
      autoFit
      data={data}
    >
      <Interval position={`${row}*${col}`} />
    </Chart>
  );
};

export default IntervalChart;