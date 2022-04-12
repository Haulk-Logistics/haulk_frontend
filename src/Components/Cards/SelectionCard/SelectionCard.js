import React from "react";
import style from './SelectionCards.module.css';

const SelectionCards = ({ label, caption }) => {
	return (
		<div className={style.selectCardDetail}>
			<div className={style.selectCard}>
				<input type='radio' id='transfer' />
				<div className={style.selectCardInfo}>
					<label htmlFor='transfer'>
						<h5>{label}</h5>
					</label>
					<br />
					<span className={style.caption}>{caption}</span>
				</div>
			</div>

			<div className={style.selectCard}>
				<input type='radio' id='transfer' />
				<div className={style.selectCardInfo}>
					<label htmlFor='transfer'>
						<h5>{label}</h5>
					</label>
					<br />
					<span className={style.caption}>{caption}</span>
				</div>
			</div>
		</div>
	);
};

export default SelectionCards;
