import {
	Chart,
	Interval,
	Tooltip,
	Axis,
	Coordinate,
	Interaction
} from "bizcharts";
import React from "react";
export default function Labelline(prop) {
  const data = prop.data;
	const cols = {
		percent: {
			formatter: val => {
				val = val * 100 + "%";
				return val;
			},
		},
	};


	return (
		<Chart height={prop.height ||400} data={data} scale={cols} autoFit onGetG2Instance={c => {
			c.geometries[0].elements.forEach((e, idx) => {
				e.setState("selected", idx === 0 ? true : false);
			});
		}}>
			<Coordinate type="theta" radius={0.75} />
			<Tooltip showTitle={false} />
			<Axis visible={false} />
			<Interval
				position="percent"
				adjust="stack"
				color="item"
				style={{
					lineWidth: 1,
					stroke: "#fff",
				}}
				label={["count", {
					content: (data) => {
						return `${data.item}: ${data.count}天`;
					},
				}]}
			/>
			<Interaction type='element-single-selected' />
		</Chart>
	);
}
