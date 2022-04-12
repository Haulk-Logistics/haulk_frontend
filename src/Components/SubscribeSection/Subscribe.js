import React from 'react';
import style from './Subscribe.module.css';
import subscribeImg from '../../Assets/Icons/subscribeImage.svg';
import buttonIcon from '../../Assets/Icons/buttonIcon.svg';

const Subscribe = (props) => {
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
							<img src={(props.btnIcon = { buttonIcon })} alt='icon' />
						</button>
					</div>
				</div>
			</div>

			<div className={style.subImg}>
				<img src={(props.image = { subscribeImg })} alt='img' />
			</div>
		</div>
	);
}

export default Subscribe;