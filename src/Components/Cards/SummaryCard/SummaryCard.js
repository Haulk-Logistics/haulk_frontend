import React from "react";
import style from './SummaryCard.module.css';
import truckIcon from '../../../Assets/Icons/truckIcon.svg';

const SummaryCard = (props) => {
	return (
		<div className={style.sumCard}>
			{/* Pending Orders Section */}
			<div className={style.pendnOrders}>
				<div
					className={style.sumIcon}
					style={{ width: '3rem', height: '3rem' }}>
					<img src={truckIcon} alt='icon' />
				</div>
				<div className={style.pendnOrderSum}>
					<h5>{props.heading}</h5>
					<h3>{props.numSummary}</h3>
				</div>
			</div>

			{/* Total Trips Section */}
			<div className={style.totalTrips}>
				<div
					className={style.sumIcon}
					style={{ width: '3rem', height: '3rem' }}>
					<img src={truckIcon} alt='icon' />
				</div>
				<div className={style.totalTripSum}>
					<h5>{(props.heading = 'Total Trips')}</h5>
					<div className={style.tripSumInfo}>
						<h3>{props.numSummary}</h3>
						<p>{props.text}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SummaryCard;
