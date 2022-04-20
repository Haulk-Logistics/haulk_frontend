import React, { useState } from 'react';
import style from './UserDashboard.module.css';
import { FaLessThan, FaGreaterThan } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { IoCube, IoGrid, IoNotifications } from 'react-icons/io5';
import hamburgerIcon from '../../Asset/Icons/hamburgerIcon.svg';
import cancelIcon from '../../Asset/Icons/cancelIcon.svg';
import webLogo from '../../Asset/Icons/webLogo.svg';
import mobileLogo from '../../Asset/Icons/mobileLogo.svg';
import userAvatar from '../../Asset/Icons/userDashboardAvatar.svg';
import activeOrder from '../../Asset/Icons/activeOrderIcon.svg';
import completedOrder from '../../Asset/Icons/completedOrderIcon.svg';
import pendingOrder from '../../Asset/Icons/pendingOrderIcon.svg';
import noOrderImage from '../../Asset/Icons/noOrderImage.svg';
import dashboardIcon2 from '../../Asset/Icons/dashboardIcon2.svg';
import truckIcon1 from '../../Asset/Icons/truckIcon1.svg';
import boxTickIcon from '../../Asset/Icons/box-tickIcon.svg';
import boxRotateIcon from '../../Asset/Icons/3d-rotateIcon.svg';
import logoutIcon from '../../Asset/Icons/logoutIcon.svg';

const UserDashboard = () => {
	const [show, setShow] = useState(false);
	const showSideBar = () => {
		setShow(!show);
	}

	return (
		<div className={style.dashboardContainer}>
			<div className={style.userMenu}>
				<img src={webLogo} alt='logo' />
				<div className={style.menuItems}>
					<button className={style.userMenuList}>
						<img src={dashboardIcon2} alt='icon' />
						Dashboard
					</button>
					<button className={style.userMenuList}>
						<img src={truckIcon1} alt='icon' />
						Truck Request
					</button>
					<button className={style.userMenuList}>
						<img src={boxTickIcon} alt='icon' />
						Track Orders
					</button>
					<button className={style.userMenuList}>
						<img src={boxRotateIcon} alt='icon' />
						Order History
					</button>
					<button className={style.userMenuList}>
						<img src={logoutIcon} alt='icon' />
						Log Out
					</button>
				</div>
			</div>
			<div className={style.userDetails}>
				<header className={style.userHeader}>
					<div className={style.menuBtn}>
						<button
							className={style.hamburgerBtn}
							onClick={() => showSideBar()}>
							<img src={show ? cancelIcon : hamburgerIcon} alt='menu' />
						</button>
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
				<div className={style.userInfo}>
					<h4 className={style.welcome}>
						Welcome <span className={style.userName}>Chidera</span>
						<span class='wave'>👋</span>
					</h4>
					<div className={style.userOrders}>
						<div className={style.order}>
							<img src={activeOrder} alt='active-order' />
							<div className={style.orderInfo}>
								<h5>Active Orders</h5>
								<span>0</span>
							</div>
						</div>
						<div className={style.order}>
							<img src={completedOrder} alt='completed-order' />
							<div className={style.orderInfo}>
								<h5>Completed Orders</h5>
								<span>0</span>
							</div>
						</div>
						<div className={style.order}>
							<img src={pendingOrder} alt='pending-order' />
							<div className={style.orderInfo}>
								<h5>Pending Orders</h5>
								<span>0</span>
							</div>
						</div>
					</div>
					<div className={style.orderHistory}>
						<div className={style.orderHistoryHeader}>
							<h4>Order History</h4>
							<div className={style.scrolls}>
								<button className={style.scrollButton}>
									<FaLessThan />
								</button>
								<button className={style.scrollButton}>
									<FaGreaterThan />
								</button>
							</div>
						</div>
						<div className={style.orderHistoryBody}>
							<img
								className={style.noOrderImage}
								src={noOrderImage}
								alt='no-order'
							/>
							<div className={style.orderHistoryInfo}>
								<h4>You’ve not made any orders yet</h4>
								<p>Your Order history will be displayed here.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserDashboard;
