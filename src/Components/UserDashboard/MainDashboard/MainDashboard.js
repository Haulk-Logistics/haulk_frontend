import React from 'react';
import style from './MainDashboard.module.css';
import { FaLessThan, FaGreaterThan } from 'react-icons/fa';
import activeOrder from '../../../Asset/Icons/activeOrderIcon.svg';
import completedOrder from '../../../Asset/Icons/completedOrderIcon.svg';
import pendingOrder from '../../../Asset/Icons/pendingOrderIcon.svg';
import noOrderImage from '../../../Asset/Icons/noOrderImage.svg';

const MainDashboard = () => {
  return (
		<div>
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
	);
}

export default MainDashboard