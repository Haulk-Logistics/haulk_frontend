import React from 'react';
import cardStyle from './CardIndex.module.css';
import deliveryPoints from '../../Assets/svg/Frame 2489.svg';



// LANDING - HOME PAGE SECTION

const CardOne = ({
	heading,
	paragraph,
	buttonName,
	image,
	reverse,
	dark,
	white,
	border,
}) => {
	return (
		<div
			className={cardStyle.card}
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				flexDirection: `${reverse ? 'row-reverse' : 'row'}`,
			}}>
			<div className={cardStyle.cardInfo}>
				<h2>{heading}</h2>
				<p>{paragraph}</p>
				<button
					className={cardStyle.cardBtn}
					style={{
						backgroundColor: `${dark ? '#ffffff' : '#25373B'}`,
						color: `${white ? '#25373B' : '#ffffff'}`,
						border: `${border ? '1px solid #25373B' : 'none'}`,
					}}>
					{buttonName}
				</button>
			</div>
			<div className={cardStyle.trkIimg}>
				<img src={image} alt='img' />
			</div>
		</div>
	);
};



// SERVICE CARDS SECTION

const ServiceCards = ({ heading, paragraph, image }) => {
	return (
		<div className={cardStyle.srvc}>
			<div className={cardStyle.srvcInfo}>
				<div className={cardStyle.icon}>
					<img src={image} alt='icon' />
				</div>
				<h4>{heading}</h4>
				<p>{paragraph}</p>
			</div>
		</div>
	);
};



// TESTIMONIALS SECTION

const Testimonials = ({ name, paragraph, image }) => {
	return (
		<div className={cardStyle.testimonial}>
			<div className={cardStyle.testInfo}>
				<div className={cardStyle.avatar}>
					<img src={image} alt='avatar' />
				</div>
				<p>{paragraph}</p>
				<span>
					<br />
					{name}
				</span>
			</div>
		</div>
	);
};



// ORDER CARDS SECTION

const OrderCards = ({
	name,
	heading,
	caption,
	status,
	date,
	location,
	cargoOwnerNum,
}) => {
	return (
		<div className={cardStyle.orderCards}>
			<div className={cardStyle.idSum}>
				<div className={cardStyle.idCard}>
					<div className={cardStyle.idNo}>
						<div>
							<h5>{heading}</h5>
							<span className={cardStyle.caption}>{caption}</span>
						</div>
						<div
							className={cardStyle.idStatus}
							style={{ backgroundColor: '#FED3D1' }}>
							{status}
						</div>
					</div>


					{/* Delivery Points Section */}

					<div className={cardStyle.trnstPoints}>
						<div className={cardStyle.trnstPoint1}>
							<span className={cardStyle.trnstDate}>{date} </span>

							<span className={cardStyle.locatn}>{location}</span>
						</div>
						<div className={cardStyle.trnstLine}>
							<img src={deliveryPoints} alt='delivery-points' />
						</div>
						<div className={cardStyle.trnstPoint2}>
							<span className={cardStyle.trnstDate}>{date} </span>

							<span className={cardStyle.locatn}>{location}</span>
						</div>
					</div>
				</div>
			</div>


			{/* Active Orders Section */}

			<div className={cardStyle.activeOrders}>
				<div className={cardStyle.titleStatus}>
					<h5>{name}</h5>
					<div
						className={cardStyle.idStatus2}
						style={{ backgroundColor: '#A4E8F2' }}>
						{(status = 'In Transit')}
					</div>
				</div>

				<div className={cardStyle.idDetails}>
					<div className={cardStyle.idNo2}>
						<h5>{heading}</h5>
						<span className={cardStyle.caption}>{caption}</span>
					</div>
					
					<div className={cardStyle.activeTrnstPoints}>
						<div className={cardStyle.activeTrnstPoint1}>
							<span className={cardStyle.trnstDate2}>{date} </span>
							<span className={cardStyle.locatn}>{location}</span>
						</div>

						<div className={cardStyle.trnstLine2}>
							<img src={deliveryPoints} alt='delivery-points' />
						</div>

						<div className={cardStyle.activeTrnstPoint2}>
							<span className={cardStyle.trnstDate2}>{date} </span>
							<span className={cardStyle.locatn}>{location}</span>
						</div>
					</div>

					<div className={cardStyle.coNum}>
						<h6>Cargo Owner Number:</h6>
						<span>{cargoOwnerNum}</span>
					</div>

					<div className={cardStyle.reqDate}>
						<h6>Request Date</h6>
						<span>{date}</span>
					</div>
				</div>
			</div>
		</div>
	);
};



// SUMMARY CARDS SECTION

const SummaryCard = ({ heading, paragraph, numSummary, image }) => {
	return (
		<div className={cardStyle.sumCard}>
			
			{/* Pending Orders Section */}
			<div className={cardStyle.pendnOrders}>
				<div
					className={cardStyle.sumIcon}
					style={{ width: '3rem', height: '3rem' }}>
					<img src={image} alt='icon' />
				</div>
				<div className={cardStyle.pendnOrderSum}>
					<h5>{heading}</h5>
					<h3>{numSummary}</h3>
				</div>
			</div>

			{/* Total Trips Section */}
			<div className={cardStyle.totalTrips}>
				<div
					className={cardStyle.sumIcon}
					style={{ width: '3rem', height: '3rem' }}>
					<img src={image} alt='icon' />
				</div>
				<div className={cardStyle.totalTripSum}>
					<h5>{heading='Total Trips'}</h5>
					<div className={cardStyle.tripSumInfo}>
						<h3>{numSummary}</h3>
						<p>{paragraph}</p>
					</div>
				</div>
			</div>
		</div>
	);
};



// SELECTION CARDS SECTION

const SelectionCards = ({ label, caption }) => {
	return (
		<div className={cardStyle.selectCardDetail}>
			<div className={cardStyle.selectCard}>
				<input type='radio' id='transfer' />
				<div className={cardStyle.selectCardInfo}>
					<label htmlFor='transfer'>
						<h5>{label}</h5>
					</label>
					<br />
					<span className={cardStyle.caption}>{caption}</span>
				</div>
			</div>

			<div className={cardStyle.selectCard}>
				<input type='radio' id='transfer' />
				<div className={cardStyle.selectCardInfo}>
					<label htmlFor='transfer'>
						<h5>{label}</h5>
					</label>
					<br />
					<span className={cardStyle.caption}>{caption}</span>
				</div>
			</div>
		</div>
	);
};



// SUBSCRIBE CARDS SECTION

const SubscribeCards = ({ heading, paragraph, btnIcon, image }) => {
	return (
		<div className={cardStyle.subContainer}>
			<div className={cardStyle.subInfo}>
				<div className={cardStyle.subMsg}>
					<h3>{heading}</h3>
					<p>{paragraph}</p>
					<div className={cardStyle.subInput}>
						{' '}
						<input type='text' placeholder='Email Address' />
						<button className={cardStyle.iconBtn}>
							<img src={btnIcon} alt='icon' />
						</button>
					</div>
				</div>
			</div>

			<div className={cardStyle.subImg}>
				<img src={image} alt='img' />
			</div>
		</div>
	);
};


export {
	CardOne,
	ServiceCards,
	Testimonials,
	OrderCards,
	SummaryCard,
	SelectionCards,
	SubscribeCards,
};
