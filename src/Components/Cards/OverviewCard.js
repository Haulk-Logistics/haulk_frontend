import React from 'react';
import style from './card.module.css';

const OverviewCard = ({ icon, color, heading, paragragh, currency }) => {
	return (
		<div className={style.overview}>
			<div className={style.icon} style={{ backgroundColor: `${color}` }}>
				{icon}
			</div>
			<div className={style.OverviewCard__body}>
				{/* h1 for  card header and p for values*/}
				<div>
					<h1>{heading}</h1>
					<p>
						{' '}
						{paragragh} <span>{currency}</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default OverviewCard;
