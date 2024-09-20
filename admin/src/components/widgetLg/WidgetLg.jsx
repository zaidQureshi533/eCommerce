import './widgetLg.css';
import {useState, useEffect} from 'react';
import {userRequest} from '../../requestMethod';
import {format} from 'timeago.js';
import {MenuItem, Select} from '@mui/material';
export default function WidgetLg() {
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		const getOrders = async () => {
			try {
				const res = await userRequest.get('/orders');
				setOrders(res.data);
			} catch (error) {
				console.log(error.message);
			}
		};
		getOrders();
	}, []);

	const Button = ({type}) => {
		return <button className={'widgetLgButton ' + type}>{type}</button>;
	};
	return (
		<div className='widgetLg'>
			<h3 className='widgetLgTitle'>Latest transactions</h3>
			<table className='widgetLgTable'>
				<thead className='widgetLgTr'>
					<tr>
						<th className='widgetLgTh'>Customer Id</th>
						<th className='widgetLgTh'>Date</th>
						<th className='widgetLgTh'>Amount</th>
						<th className='widgetLgTh'>Status</th>
					</tr>
				</thead>
				<tbody className='widgetLgTr'>
					{orders?.map((order) => {
						const {_id, userId, createdAt, amount, status} = order;
						return (
							<tr key={_id}>
								<td className='widgetLgUser'>
									<span className='widgetLgName'>{userId}</span>
								</td>
								<td className='widgetLgDate'>{format(createdAt)}</td>
								<td className='widgetLgAmount'>${amount.toFixed(2)}</td>
								<td>
									<Button type={status} />
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
