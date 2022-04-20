import React from 'react';
import style from './Subscribe.module.css';
import subscribeImg from '../../Asset/svg/subscribeImage.svg';
import buttonIcon from '../../Asset/Icons/buttonIcon.svg';

const Subscribe = () => {
	return (
		<div className={style.subContainer}>
			<div className={style.subInfo}>
				<div className={style.subMsg}>
					<h3>Want to know more about our services?</h3>
					<p>Subcribe to our Newsletter</p>
					<div className={style.subInput}>
						{' '}
						<input type='text' placeholder='Email Address' />
						<button type='submit' className={style.btnIcon}>
							<img src={buttonIcon} alt='icon' />
						</button>
					</div>
				</div>
			</div>

			<div className={style.subImg}>
				<img src={subscribeImg} alt='img' />
			</div>
		</div>
	);
};

export default Subscribe;
