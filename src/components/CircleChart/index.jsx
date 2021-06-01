import React from "react";
import { DonutChart } from "bizcharts";

/**
 * 
 * @param {object} props
 * @param {string} props.title
 * @param {array} props.data 
 */
const CircleChart = (props) => {
  const {
    title = "环形图",
    data = []
  } = props;
  return (
    <DonutChart
      data={data}
      title={{
        visible: true,
        text: title,
      }}
      forceFit
      radius={1}
      padding="auto"
      angleField="value"
      colorField="type"
      pieStyle={{ stroke: "white", lineWidth: 2 }}
    />
  );
};

export default CircleChart;