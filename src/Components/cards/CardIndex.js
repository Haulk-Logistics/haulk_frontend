// import React from 'react';
// import truckImg from './Rectangle 10.svg';
// import deliveryLady from './Rectangle 22.svg';
// import circle from './Ellipse 6.svg';

const CardOne = ({ heading, paragraph, buttonName, image, reverse }) => {
	return (
		<div
			className='webView'
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				flexDirection: `${reverse ? 'row-reverse' : 'row'}`,
			}}>
			<div>
				<h2>{heading}</h2>
				<p>{paragraph}</p>
				<button>{buttonName}</button>
			</div>
			<div className='trkIimg'>
				{' '}
				<img src={image} alt='truck-img' />
			</div>
		</div>
	);
};

const CardTwo = ({ heading, paragraph, buttonName, image }) => {
	return (
		<div className='mobView'>
			<div className='dlvryLady'>
				<img src={image} alt='delivery-lady' />
			</div>
			<div>
				<h4>{heading}</h4>
				<p>{paragraph}</p>
			</div>
			<button>{buttonName}</button>
		</div>
	);
};

const ServiceCards = ({ heading, paragraph, image }) => {
	return (
		<div className='webSrvc'>
			<div className='icon'>
				<img src={image} alt='icon' />
			</div>
			<h4>{heading}</h4>
			<p>{paragraph}</p>
		</div>
	);
};

const ServiceCards2 = ({ heading, paragraph, image }) => {
	return (
		<div className='mobSrvc'>
			<div className='icon'>
				<img src={image} alt='icon' />
			</div>
			<h4>{heading}</h4>
			<p>{paragraph}</p>
		</div>
	);
};

const Testimonials = ({ heading, paragraph, image }) => {
	return (
		<div className='webTest'>
			<div className='avatar'>
				<img src={image} alt='avatar' />
			</div>
			<h4>{heading}</h4>
			<p>{paragraph}</p>
		</div>
	);
};

const Testimonials2 = ({ heading, paragraph, image }) => {
	return (
		<div className='mobView'>
			<div className='avatar'>
				<img src={image} alt='avatar' />
			</div>
			<h4>{heading}</h4>
			<p>{paragraph}</p>
		</div>
	);
};

const OrderCards = ({ name, heading, caption, status, date, location, cargoOwnerNum }) => {
	return (
		<div>
			<main>
				<div className='idCard'>
					<div className='idNo'>
						<h5>{heading}</h5>
						<span className='caption'>{caption}</span>
					</div>
					<span className='idStatus' style={{ backgroundColor: '#FED3D1' }}>
						{status}
					</span>

					<div className='trnstPoints'>
						<div className='trnstPoint1'>
							<span className='trnstDate'>{date} </span>
							<div className='trnstCircle'></div>
							<span className='locatn'>{location}</span>
						</div>
						<div className='trnstPoint2'>
							<span className='trnstDate'>{date} </span>
							<div className='trnstCircle'></div>
							<span className='locatn'>{location}</span>
						</div>
					</div>
				</div>

				<div className='activeOrders'>
					<h5>{name}</h5>
					<div className='idNo'>
						<h5>{heading}</h5>
						<span className='caption'>{caption}</span>
					</div>
					<div className='trnstPoints'></div>
					<div className='coNum'>{cargoOwnerNum}</div>
					<div className='reqDate'>{date}</div>
				</div>
			</main>
		</div>
	);
};

const SummaryCard = () => {
	return (
		<div>
			<div className='pendnOrders'>
				{/* <img src={imgsvg} /> */}
				<p>Pending Orders</p>
				<h3>10</h3>
			</div>

			<div className='totalTrips'>
				{/* <img src={imgsvg} /> */}
				<p>Total Trips</p>
				<h3>10</h3>
			</div>
		</div>
	);
};

const SelectionCards = () => {
	return (
		<div>
			<div className='selectCard'>
				<input type='radio' id='transfer'>
					<label for='transfer'>Transfer</label>
					<br />
					<span className='caption'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,{' '}
					</span>
				</input>
			</div>

			<div>
				<input type='radio' id='transfer'>
					<label for='transfer'>Transfer</label>
					<br />
					<span className='caption'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,{' '}
					</span>
				</input>
			</div>
		</div>
	);
};

const SubscribeCards = () => {
	return <div></div>;
};

export {
	CardOne,
	CardTwo,
	ServiceCards,
	ServiceCards2,
	Testimonials,
	Testimonials2,
	OrderCards,
	SummaryCard,
	SelectionCards,
	SubscribeCards,
};
