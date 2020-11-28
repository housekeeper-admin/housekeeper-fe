import { DonutChart } from "bizcharts";
import React from "react";
export default function CircleChart(prop) {
  return (
    <DonutChart
      data={prop.data || []}
      title={{
        visible: true,
        text: prop.title||"图",
      }}
      forceFit
      radius={1}
      padding="auto"
      angleField="value"
      colorField="type"
      pieStyle={{ stroke: "white", lineWidth: 2 }}
    />
  );
}
