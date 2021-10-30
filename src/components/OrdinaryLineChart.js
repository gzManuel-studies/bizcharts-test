import { Chart, Line, Point, Tooltip,getTheme } from "bizcharts";

function OrdinaryLineChart() {
    console.log(getTheme())
    const data = [
        {
            year: "",
            value: 3,
        },
        {
            year: "2",
            value: 4,
        },
        {
            year: "3",
            value: 3.5,
        },
        {
            year: "4",
            value: 5,
        },
        {
            year: "5",
            value: 4.9,
        },
        {
            year: "6",
            value: 6,
        },
        {
            year: "7",
            value: 7,
        },
        {
            year: "8",
            value: 9,
        },
        {
            year: "9",
            value: 13,
        },
    ];

	return (
		<>
			<Chart
				appendPadding={[10, 0, 0, 10]}
				autoFit
				height={500}
				data={data}
				scale={{ value: { min: 0, alias: 'Candidates per year', type: 'linear-strict' }, year: { range: [0, 1] } }}
			>

				<Line position="year*value" />
				<Point position="year*value" />
				<Tooltip showCrosshairs />
			</Chart>
		</>
	);
}

export default OrdinaryLineChart;
