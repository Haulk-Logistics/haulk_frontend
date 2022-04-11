import React from 'react';
import {
	CardOne,
	OrderCards,
	SelectionCards,
	ServiceCards,
	SubscribeCards,
	SummaryCard,
	Testimonials,
} from './CardIndex';
import deliveryLady from './svg/Rectangle 10.svg';
import truckImg from './svg/Rectangle 22.svg';
import truckIcon from './svg/Group 237.svg';
import avatar from './svg/Ellipse 38.svg';
import subscribeImg1 from './svg/Rectangle 748.svg';
import btnIcon from './svg/direct-right.svg';

const Card = () => {
	return (
		<div className='cardContainer'>
			<CardOne
				heading='Reliable. Fast. Efficient'
				paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
							ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
							dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua.'
				buttonName='Button Name'
				image={deliveryLady}
			/>
			<CardOne
				heading='Reliable. Fast. Efficient'
				paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
							ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
							dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua.'
				buttonName='Button Name'
				image={truckImg}
				reverse
				dark
				white
				border
			/>

			<ServiceCards
				heading='Prompt Delivery'
				paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit, '
				image={truckIcon}
			/>

			<Testimonials
				name='~ Amadi'
				paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit, '
				image={avatar}
			/>

			<OrderCards
				name='Active Order'
				heading='ID 816495'
				caption='Consignment'
				status='Incomplete'
				date='23 Apr'
				location='831 Heather Parkway, Enugu.'
				cargoOwnerNum='0903 354 6898'
			/>

			<SummaryCard
				heading='Pending Orders'
				paragraph='Lorem ipsum dolor '
				numSummary='10'
				image={truckIcon}
			/>

			<SelectionCards
				label='Transfer'
				caption='Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
			/>

			<SubscribeCards
				heading='Want to know more about our services?'
				paragraph='Subcribe to our Newsletter'
				btnIcon={btnIcon}
				image={subscribeImg1}
			/>

		</div>
	);
};

export default Card;
