import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './UserHeader.module.css';
import { VscMenu, VscChromeClose } from 'react-icons/vsc';
import { IoNotifications } from 'react-icons/io5';
import mobileLogo from '../../../Asset/Icons/mobileLogo.svg';
import userAvatar from '../../../Asset/Icons/userDashboardAvatar.svg';

const UserHeader = () => {
	const [show, setShow] = useState(false);
	const toggleSidebarVisibility = () => {
		setShow(!show);
	};
	return (
		<div>
			<div
				className={style.mobileNav}
				style={{ display: show ? 'flex' : 'none' }}>
				<ul className={style.mobileNavItems}>
					<Link to='/'>
						<li>Dashboard</li>
					</Link>
					<Link to='/truck-request'>
						<li>Truck Request</li>
					</Link>
					<Link to='/track-order'>
						<li>Track Orders</li>
					</Link>
					<Link to='/order-history'>
						<li>Order History</li>
					</Link>
					<Link to='/landing-page'>
						<li>Log Out</li>
					</Link>
				</ul>
			</div>
			<header className={style.userHeader}>
				<div className={style.menuBtn}>
					<div
						className={style.menuIcon}
						onClick={() => toggleSidebarVisibility()}>
						{show ? (
							<VscChromeClose style={{ width: '2rem' }} />
						) : (
							<VscMenu style={{ width: '2rem' }} />
						)}
					</div>

					<img src={mobileLogo} alt='menu' />
				</div>

				<div className={style.profileHeader}>
					<IoNotifications className={style.bell} />
					<img src={userAvatar} alt='profileImg' />
					<div className={style.userTitle}>
						<p>Nweze Chidera</p>
						<span className={style.caption}>Cargo Owner</span>
					</div>
				</div>
			</header>
		</div>
	);
};

export default UserHeader;
