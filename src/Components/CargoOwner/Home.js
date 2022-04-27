import React from 'react';
import OverviewCard from '../Cards/OverviewCard';
import { HiTruck } from 'react-icons/hi';
import { IoMdWallet } from 'react-icons/io';
import style from './body.module.css';
import OrderHistory from './OrderHistory';
import { SiSemanticweb } from 'react-icons/si';
import { FaBusinessTime } from 'react-icons/fa';

const CargoHome = () => {
	return (
		<div className={style.container}>
			<div className={style.intro}>
				<p>
					Welcome <span>Chidera</span>
				</p>
			</div>
			<div className={style.overview}>
				<div className={style.Overview__card}>
					<OverviewCard
						icon={<HiTruck size='1.5rem' />}
						color='var(--info-links)'
						heading='Active Orders'
						paragragh='10'
						className={style.Overview__card}
					/>
				</div>
				<div className={style.Overview__card}>
					<OverviewCard
						icon={<SiSemanticweb size='1.5rem' />}
						color='var(--success)'
						heading='Completed Orders'
						paragragh='10'
						className={style.Overview__card}
					/>
				</div>
				<div className={style.Overview__card} style={{ marginRight: 0 }}>
					<OverviewCard
						icon={<FaBusinessTime size='1.5rem' />}
						color='var(--error)'
						heading='Pending Orders'
						paragragh='12'
					/>
				</div>
			</div>
			<OrderHistory />
		</div>
	);
};

export default CargoHome;
