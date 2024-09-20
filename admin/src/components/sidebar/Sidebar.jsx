import './sidebar.css';
import {
	LineStyle,
	Timeline,
	TrendingUp,
	PermIdentity,
	Storefront,
	AttachMoney,
	BarChart,
	MailOutline,
	DynamicFeed,
	ChatBubbleOutline,
	WorkOutline,
	Report,
	ShoppingBagOutlined,
} from '@mui/icons-material';
import {Link, useLocation} from 'react-router-dom';

export default function Sidebar() {
	const location = useLocation().pathname;
	return (
		<div className='sidebar'>
			<div className='sidebarWrapper'>
				<div className='sidebarMenu'>
					<h3 className='sidebarTitle'>Dashboard</h3>
					<ul className='sidebarList'>
						<Link to='/' className='link'>
							<li className={`sidebarListItem ${location === '/' && 'active'}`}>
								<LineStyle className='sidebarIcon' />
								Home
							</li>
						</Link>
						<li className='sidebarListItem'>
							<Timeline className='sidebarIcon' />
							Analytics
						</li>
						<li className='sidebarListItem'>
							<TrendingUp className='sidebarIcon' />
							Sales
						</li>
					</ul>
				</div>
				<div className='sidebarMenu'>
					<h3 className='sidebarTitle'>Quick Menu</h3>
					<ul className='sidebarList'>
          <li className={`sidebarListItem ${location === '/users' && 'active'}`}>
							<Link to='/users' className='link'>
								<PermIdentity className='sidebarIcon' />
								Users
							</Link>
						</li>
						<li className={`sidebarListItem ${location === '/products' && 'active'}`}>
							<Link to='/products' className='link'>
								<Storefront className='sidebarIcon' />
								Products
							</Link>
						</li>
						<li className={`sidebarListItem ${location === '/orders' && 'active'}`}>
							<Link to={'/orders'} className='link'>
								<ShoppingBagOutlined className='sidebarIcon' />
								Orders
							</Link>
						</li>
            <li className={`sidebarListItem ${location === '/reports' && 'active'}`}>
							<BarChart className='sidebarIcon' />
							Reports
						</li>
					</ul>
				</div>
				<div className='sidebarMenu'>
					<h3 className='sidebarTitle'>Notifications</h3>
					<ul className='sidebarList'>
          <li className={`sidebarListItem ${location === '/mails' && 'active'}`}>
							<MailOutline className='sidebarIcon' />
							Mail
						</li>
            <li className={`sidebarListItem ${location === '/feeds' && 'active'}`}>
							<DynamicFeed className='sidebarIcon' />
							Feedback
						</li>
            <li className={`sidebarListItem ${location === '/messages' && 'active'}`}>
							<ChatBubbleOutline className='sidebarIcon' />
							Messages
						</li>
					</ul>
				</div>
				<div className='sidebarMenu'>
					<h3 className='sidebarTitle'>Staff</h3>
					<ul className='sidebarList'>
						<li className='sidebarListItem'>
							<WorkOutline className='sidebarIcon' />
							Manage
						</li>
						<li className='sidebarListItem'>
							<Timeline className='sidebarIcon' />
							Analytics
						</li>
						<li className='sidebarListItem'>
							<Report className='sidebarIcon' />
							Reports
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
