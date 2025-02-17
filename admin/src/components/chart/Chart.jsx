import './chart.css';
import {
	LineChart,
	Line,
	XAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';

export default function Chart({title, data, dataKey, grid}) {
	return (
		<div className='chart'>
			<h3 className='chartTitle'>{title}</h3>
			<ResponsiveContainer width="100%" aspect={ 4 / 1}>
				<LineChart data={data}>
					<XAxis dataKey='name' />
					<Line type='monotone' dataKey={dataKey} stroke='#8884d8' />
					<Tooltip />
					{grid && <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />}
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}
