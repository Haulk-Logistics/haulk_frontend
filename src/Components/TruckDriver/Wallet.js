import React from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';
import style from './Wallet.module.css';
import { HiArrowLeft } from 'react-icons/hi';
import withdrawableWallet from '../../Asset/Icons/withdrawableWallet.svg';

const Wallet = () => {
	return (
		<div className={style.wallet__container}>
			<SideBar />
			<div className={style.wallet__content}>
				<NavBar />
				<div className={style.wallet__info}>
					{/* <div className={style.wallet__heading}>
						<HiArrowLeft style={{ marginTop: '0.35rem' }} />
						<h4>Withdraw</h4>
					</div> */}

					{/* WITHDRAW INFO */}
					<div className={style.wallet__withdraw}>
						<div>
							<img src={withdrawableWallet} />
						</div>
						<div className={style.wallet__withdrawInfo}>
							<h5 className={style.wallet__withdrawTitle}>
								Withdrawable Balance
							</h5>
							<h4 className={style.wallet__withdrawAmount}>5, 000,000 (NGN)</h4>
						</div>
					</div>

					{/* WITH DRAW FORM */}
					<div className={style.wallet__withdrawForm}>
						<form action='post'>
							<label htmlFor='amount'>
								<h5>Amount (NGN)</h5>
							</label>
							<input type='text' placeholder='e.g. 500, 000' />

							<label htmlFor='bank'>
								<h5>Bank</h5>
							</label>
							<select>
								<option value='unknown' placeholder='e.g. Access Bank'>
									Select Your Bank
								</option>
							</select>

							<label htmlFor='account'>
								<h5>Account Number</h5>
							</label>
							<input type='text' placeholder='e.g. 2434...' />
						</form>
						<button type='submit'>Withdraw</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Wallet;
