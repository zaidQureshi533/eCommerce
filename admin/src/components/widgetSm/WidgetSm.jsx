import {useEffect, useState} from 'react';
import './widgetSm.css';
import {Visibility} from '@mui/icons-material';
import {userRequest} from '../../requestMethod';

export default function WidgetSm() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const getUsers = async () => {
			try {
				const res = await userRequest.get('/users?new=true');
				setUsers(res.data);
			} catch (error) {
				console.log(error.message);
			}
		};
		getUsers();
	}, []);

	return (
		<div className='widgetSm'>
			<span className='widgetSmTitle'>New Join Members</span>
			<ul className='widgetSmList'>
				{users.map((user) => {
					return (
						<li className='widgetSmListItem' key={user._id}>
							<img
								src={
									user.img ||
									'https://cdn-icons-png.flaticon.com/512/6596/6596121.png'
								}
								alt=''
								className='widgetSmImg'
							/>
							<div className='widgetSmUser'>
								<span className='widgetSmUsername'>{user.username}</span>
							</div>
							<button className='widgetSmButton'>
								<Visibility className='widgetSmIcon' />
								Display
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
