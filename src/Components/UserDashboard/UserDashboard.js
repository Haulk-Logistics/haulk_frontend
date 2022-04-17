import React from 'react';
import style from './UserDashboard.module.css'; 
import { FaLessThan, FaGreaterThan } from 'react-icons/fa';
import webLogo from '../../Assets/Icons/webLogo.svg';
import userAvatar from '../../Assets/Icons/userDashboardAvatar.svg';
import activeOrder from '../../Assets/Icons/activeOrderIcon.svg';
import completedOrder from '../../Assets/Icons/completedOrderIcon.svg';
import pendingOrder from '../../Assets/Icons/pendingOrderIcon.svg';
import noOrderImage from '../../Assets/Icons/noOrderImage.svg';
import dashboardIcon from '../../Assets/Icons/dashboardIcon.svg';
import truckIcon2 from '../../Assets/Icons/truckIcon2.svg';
import boxTickIcon from '../../Assets/Icons/box-tickIcon.svg';
import boxRotateIcon from '../../Assets/Icons/3d-rotateIcon.svg';
import logoutIcon from '../../Assets/Icons/logoutIcon.svg';

const UserDashboard = () => {
	return (
		<div className={style.dashboardContainer}>
			<div className={style.userMenu}>
				<img src={webLogo} alt='logo' />
				<div className={style.userMenuList1}>
					<img src={dashboardIcon} alt='icon' />
					Dashboard
				</div>
				<div className={style.userMenuList}>
					<img src={truckIcon2} alt='icon' />
					Truck Request
				</div>
				<div className={style.userMenuList}>
					<img src={boxTickIcon} alt='icon' />
					Track Orders
				</div>
				<div className={style.userMenuList}>
					<img src={boxRotateIcon} alt='icon' />
					Order History
				</div>
				<div className={style.userMenuList}>
					<img src={logoutIcon} alt='icon' />
					Log Out
				</div>
			</div>
			<div className={style.userDetails}>
				<header className={style.userHeader}>
					<img src={userAvatar} alt='profileImg' />
					<div className={style.userTitle}>
						<p>Nweze Chidera</p>
						<span className={style.caption}>Cargo Owner</span>
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
							<div>
								<h5>Active Orders</h5>
								<span>0</span>
							</div>
						</div>
						<div className={style.order}>
							<img src={completedOrder} alt='completed-order' />
							<div>
								<h5>Completed Orders</h5>
								<span>0</span>
							</div>
						</div>
						<div className={style.order}>
							<img src={pendingOrder} alt='pending-order' />
							<div>
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
