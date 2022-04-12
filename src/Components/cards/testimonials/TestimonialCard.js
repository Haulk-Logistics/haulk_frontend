import React from 'react';
import style from './TestimonialCard.module.css';

const Testimonials = (props) => {
	return (
		<div className={style.testimonial}>
			<div className={style.testInfo}>
				<div className={style.avatar}>
					<img src={props.image} alt='avatar' />
				</div>
				<p>{props.text}</p>
				<span>
					<br />
					{props.name}
				</span>
			</div>
		</div>
	);
};

export default Testimonials;