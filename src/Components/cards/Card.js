import React from 'react';
import {
	CardOne,
	CardTwo,
	OrderCards,
	ServiceCards,
	ServiceCards2,
	Testimonials,
	Testimonials2,
} from './cardIndex';
import truckImg from './Rectangle 10.svg';
import deliveryLady from './Rectangle 22.svg';

const Card = () => {
	return (
		<div>
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
			/>

			<CardTwo
				heading='Reliable. Fast. Efficient'
				paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
					ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua.'
				buttonName='Button Name'
				image={deliveryLady}
			/>

			<ServiceCards
				heading='Prompt Delivery'
				paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit, '
				// image={imgIcon}
			/>

			<ServiceCards2
				heading='Prompt Delivery'
				paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit, '
				// image={imgIcon}
			/>

			<Testimonials
				heading='Prompt Delivery'
				paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit, '
				// image={imgIcon}
			/>

			<Testimonials2
				heading='Prompt Delivery'
				paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit, '
				// image={imgIcon}
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
		</div>
	);
};

export default Card;
