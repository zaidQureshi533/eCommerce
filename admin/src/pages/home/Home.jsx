import './home.css';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import {useEffect, useMemo, useState} from 'react';
import {userRequest} from '../../requestMethod';
import Layout from '../../components/layout/Layout';

export default function Home() {
	document.title = 'Home';
	const [userStats, setUserStats] = useState([]);

	const MONTHS = useMemo(
		() => [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		],
		[]
	);

	useEffect(() => {
		const getState = async () => {
			try {
				const res = await userRequest.get('/users/stats');
				res.data.map((item) => {
					const newStat = {
						name: MONTHS[item._id - 1],
						'Active User': item.total,
					};
					setUserStats((prev) => [...prev, newStat]);
				});
			} catch (err) {}
		};
		getState();
	}, [MONTHS]);
	return (
		<Layout>
			<div className='home'>
				<FeaturedInfo />
				<div style={{marginBlock: '20px'}}>
					<Chart
						data={userStats}
						dataKey='Active User'
						title='User Analytics'
						grid
					/>
				</div>
				<div className='homeWidgets'>
					<WidgetSm />
					<WidgetLg />
				</div>
			</div>
		</Layout>
	);
}
