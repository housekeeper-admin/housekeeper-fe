import React from "react";
import { Chart, Interval } from "bizcharts";
export default function Intervals(prop) {
  return (
  <Chart height={prop.height || 300} autoFit data={prop.data} >
    <Interval position={`${prop.row}*${prop.col}`}  />
  </Chart>);
}