import React from 'react';
import style from './UserSideBar.module.css';
import { HiViewGrid, HiTruck, HiCube } from 'react-icons/hi';
import { RiAnticlockwise2Fill } from 'react-icons/ri';
import { IoLogOut } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import webLogo from '../../../Asset/Icons/webLogo.svg';

const UserSideBar = () => {
  return (
		<div>
			{/* <div
				className={style.mobileNav}
				style={{ display: show ? 'flex' : 'none' }}>
				<ul className={style.mobileNavItems}>
					<Link to='/'>
						<li>Dashboard</li>
					</Link>
					<Link to='/truck-request'>
						<li>Truck Request</li>
					</Link>
					<Link to='/track-orders'>
						<li>Track Orders</li>
					</Link>
					<Link to='/order-history'>
						<li>Order History</li>
					</Link>
					<Link to='/landing-page'>
						<li>Log Out</li>
					</Link>
				</ul>
			</div> */}

			<div className={style.userMenu}>
				<img src={webLogo} alt='logo' />
				<div className={style.menuItems}>
					<ul className={style.userMenuList}>
						<Link to='/' style={{ textDecoration: 'none' }}>
							<li>
								<HiViewGrid
									className={style.sibeBarIcon}
									style={{ marginRight: '3.5rem' }}
								/>
								Dashboard
							</li>
						</Link>
						<Link to='/truck-request' style={{ textDecoration: 'none' }}>
							<li>
								<HiTruck className={style.sibeBarIcon} />
								Truck Request
							</li>
						</Link>
						<Link to='/track-orders' style={{ textDecoration: 'none' }}>
							<li>
								<HiCube
									className={style.sibeBarIcon}
									style={{ marginRight: '3rem' }}
								/>
								Track Orders
							</li>
						</Link>
						<Link to='/order-history' style={{ textDecoration: 'none' }}>
							<li>
								<RiAnticlockwise2Fill
									className={style.sibeBarIcon}
									style={{ marginRight: '2.4rem' }}
								/>
								Order History
							</li>
						</Link>
						<Link
							to='/landing-page'
							style={{ textDecoration: 'none', marginTop: '8rem' }}>
							<li>
								<IoLogOut className={style.sibeBarIcon} />
								Log Out
							</li>
						</Link>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default UserSideBar;