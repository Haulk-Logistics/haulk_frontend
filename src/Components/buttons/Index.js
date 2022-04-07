import React from 'react';
import btnStyle from './style.module.css';
import { BsArrowRepeat } from 'react-icons/bs';

const Primary = ({ type, name, disabled = false }) => {
	return (
		<button type={type} disabled={disabled} className={btnStyle.priBtn}>
			{name}
		</button>
	);
};

const Secondary = ({ type, name, disabled = false }) => {
	return (
		<button type={type} disabled={disabled} className={btnStyle.secBtn}>
			{name}
		</button>
	);
};

const PrimaryIcon = ({ type, name, disabled = false }) => {
	return (
		<button type={type} disabled={disabled} className={btnStyle.priIconBtn}>
			{name}
			<BsArrowRepeat style={{ marginLeft: '0.5rem' }} />
		</button>
	);
};

const SecondaryIcon = ({ type, name, disabled = false }) => {
	return (
		<button type={type} disabled={disabled} className={btnStyle.secIconBtn}>
			{name} <BsArrowRepeat style={{ marginLeft: '0.5rem' }} />
		</button>
	);
};

const Tertiary = ({ type, name, disabled = false }) => {
	return (
		<button type={type} disabled={disabled} className={btnStyle.terBtn}>
			{name}
		</button>
	);
};

const TertiaryIcon = ({ type, name, disabled = false }) => {
	return (
		<button type={type} disabled={disabled} className={btnStyle.terIconBtn}>
			{name}{' '}
			<BsArrowRepeat style={{ marginLeft: '0.5rem' }} />
		</button>
	);
};

const Destructive = ({ type, name, disabled = false }) => {
	return (
		<button type={type} disabled={disabled} className={btnStyle.desBtn}>
			{name}
		</button>
	);
};

export {
	Primary,
	Secondary,
	PrimaryIcon,
	SecondaryIcon,
	Tertiary,
	TertiaryIcon,
	Destructive,
};
