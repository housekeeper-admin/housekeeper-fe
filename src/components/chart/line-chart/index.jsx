import { Chart, Line, Point, Tooltip, Axis } from "bizcharts";
import * as React from "react";

const LineChart = (props) => {
	const {
		row, col, data, valueName
	} = props;

	return (
		<Chart
			padding={[10, 20, 50, 50]}
			autoFit

			height={260}
			data={data}
			scale={{ value: { min: 0 } }}
		>
			<Line
				position={`${row}*${col}`}
			/>
			<Point
				position={`${row}*${col}`}
			/>
			<Tooltip />
			<Axis
				name={valueName}
				title={{
					position: "center"
				}}
			/>
		</Chart>
	);
};

export default LineChart;