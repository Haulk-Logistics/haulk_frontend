import React from 'react';
import styles from './TestimonialCard.module.css';

const Testimonials = (props) => {
	return (
		// <div className={style.testimonial}>
		// 	<div className={style.testInfo}>
		// 		<div className={style.avatar}>
		// 			<img src={props.image} alt='avatar' />
		// 		</div>
		// 		<p>{props.text}</p>
		// 		<span>
		// 			<br />
		// 			{props.name}
		// 		</span>
		// 	</div>
		// </div>

		<div className={styles.testimonial}>
			<div className = {styles.testimonialImage}>
				<img src={props.image} alt="Testimonial Avatar"/>
			</div>
			<div className = {styles.testimonialText}>
				<p>{props.text}</p>
				<p>{props.name}</p>
			</div>
		</div>

	);
};

export default Testimonials;