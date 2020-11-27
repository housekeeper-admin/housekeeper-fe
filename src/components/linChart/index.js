import { Chart, Line, Point, Tooltip, Axis } from "bizcharts";
import React from "react";
export default function LineChart(prop) {
	return (
		<Chart
			padding={[10, 20, 50, 50]}
			autoFit

			height={260}
			data={prop.data}
			scale={{ value: { min: 0 } }}
			// onLineMouseleave={console.log}
			// onPointClick={console.warn}
		>
			<Line position={`${prop.row}*${prop.col}`} />
			<Point position={`${prop.row}*${prop.col}`} />
			<Tooltip showCrosshairs lock triggerOn='click' />
			<Axis name={prop.valueName} title={{
				position: "center"
			}} />
		</Chart>
	);
}