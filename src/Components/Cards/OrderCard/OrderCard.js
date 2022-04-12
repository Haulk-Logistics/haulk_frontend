import React from "react";
import style from './OrderCard.module.css';
import deliveryPoints from '../../../Assets/Icons/deliveryPoints.svg';

const OrderCards = (props) => {
	return (
		<div className={style.orderCards}>
			<div className={style.idSum}>
				<div className={style.idCard}>
					<div className={style.idNo}>
						<div>
							<h5>{props.heading}</h5>
							<span className={style.caption}>{props.caption}</span>
						</div>
						<div
							className={style.idStatus}
							style={{ backgroundColor: '#FED3D1' }}>
							{props.status}
						</div>
					</div>

					{/* Delivery Points Section */}

					<div className={style.trnstPoints}>
						<div className={style.trnstPoint1}>
							<span className={style.trnstDate}>{props.date} </span>

							<span className={style.locatn}>{props.location}</span>
						</div>
						<div className={style.trnstLine}>
							<img src={style} alt='delivery-points' />
						</div>
						<div className={style.trnstPoint2}>
							<span className={style.trnstDate}>{props.date} </span>

							<span className={style.locatn}>{props.location}</span>
						</div>
					</div>
				</div>
			</div>

			{/* Active Orders Section */}

			<div className={style.activeOrders}>
				<div className={style.titleStatus}>
					<h5>{props.name}</h5>
					<div
						className={style.idStatus2}
						style={{ backgroundColor: '#A4E8F2' }}>
						{(props.status = 'In Transit')}
					</div>
				</div>

				<div className={style.idDetails}>
					<div className={style.idNo2}>
						<h5>{props.heading}</h5>
						<span className={style.caption}>{props.caption}</span>
					</div>

					<div className={style.activeTrnstPoints}>
						<div className={style.activeTrnstPoint1}>
							<span className={style.trnstDate2}>{props.date} </span>
							<span className={style.locatn}>{props.location}</span>
						</div>

						<div className={style.trnstLine2}>
							<img src={deliveryPoints} alt='delivery-points' />
						</div>

						<div className={style.activeTrnstPoint2}>
							<span className={style.trnstDate2}>{props.date} </span>
							<span className={style.locatn}>{props.location}</span>
						</div>
					</div>

					<div className={style.coNum}>
						<h6>Cargo Owner Number:</h6>
						<span>{props.cargoOwnerNum}</span>
					</div>

					<div className={style.reqDate}>
						<h6>Request Date</h6>
						<span>{props.date}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrderCards;
