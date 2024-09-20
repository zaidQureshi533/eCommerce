import {useEffect, useState} from 'react';
import './featuredInfo.css';
import {ArrowDownward, ArrowUpward} from '@mui/icons-material';
import {userRequest} from '../../requestMethod';
export default function FeaturedInfo() {
	const [sales, setSales] = useState([]);
	const [perc, setPerc] = useState(0);
	useEffect(() => {
		const getIncome = async () => {
			try {
				const res = await userRequest.get('/orders/income');
				setSales(res.data[0]?.total);
				res.data.length > 1 &&
					setPerc((res.data[0]?.total / res.data[1]?.total) * 100 - 100);
			} catch (err) {
				console.log(err);
			}
		};
		getIncome();
	}, []);

	return (
		<div className='featured'>
			<div className='featuredItem'>
				<span className='featuredTitle'>Sales</span>
				<div className='featuredMoneyContainer'>
					<span className='featuredMoney'>${Number(sales).toFixed(2)}</span>
					<span className='featuredMoneyRate'>
						{Math.floor(perc)}%
						{perc < 0 ? (
							<ArrowDownward className='featuredIcon negative' />
						) : (
							<ArrowUpward className='featuredIcon' />
						)}
					</span>
				</div>
				<span className='featuredSub'>Compared to last month</span>
			</div>
			<div className='featuredItem'>
				<span className='featuredTitle'>Cost</span>
				<div className='featuredMoneyContainer'>
					<span className='featuredMoney'>
						${Math.floor((sales / 120) * 100)}
					</span>
					<span className='featuredMoneyRate'>
						+2.4 <ArrowUpward className='featuredIcon' />
					</span>
				</div>
				<span className='featuredSub'>Compared to last month</span>
			</div>
			<div className='featuredItem'>
				<span className='featuredTitle'>Revenue</span>
				<div className='featuredMoneyContainer'>
					<span className='featuredMoney'>
						${(sales - Math.floor((sales / 120) * 100)).toFixed(2)}
					</span>
					<span className='featuredMoneyRate'>
						{perc}
						<ArrowDownward className='featuredIcon negative' />
					</span>
				</div>
				<span className='featuredSub'>Compared to last month</span>
			</div>
		</div>
	);
}
