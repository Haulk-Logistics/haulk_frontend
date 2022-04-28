import React, { useState } from "react";
import style from "./UserDashboard.module.css";
import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { VscMenu, VscChromeClose } from "react-icons/vsc";
import { HiViewGrid, HiTruck, HiCube } from "react-icons/hi";
import { RiAnticlockwise2Fill } from "react-icons/ri";
import { IoLogOut } from "react-icons/io5";
import webLogo from "../../Asset/Icons/webLogo.svg";
import mobileLogo from "../../Asset/Icons/mobileLogo.svg";
import userAvatar from "../../Asset/Icons/userDashboardAvatar.svg";
// import activeOrder from '../../Asset/Icons/activeOrderIcon.svg';
// import completedOrder from '../../Asset/Icons/completedOrderIcon.svg';
// import pendingOrder from '../../Asset/Icons/pendingOrderIcon.svg';
// import noOrderImage from '../../Asset/Icons/noOrderImage.svg';
import { Link } from "react-router-dom";
import MainDashboard from "./MainDashboard/MainDashboard";

const UserDashboard = () => {
  const [show, setShow] = useState(false);
  const toggleSidebarVisibility = () => {
    setShow(!show);
  };

  return (
    <div className={style.dashboardContainer}>
      <div
        className={style.mobileNav}
        style={{ display: show ? "flex" : "none" }}
      >
        <ul className={style.mobileNavItems}>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/truck-request">
            <li>Truck Request</li>
          </Link>
          <Link to="/track-orders">
            <li>Track Orders</li>
          </Link>
          <Link to="/order-history">
            <li>Order History</li>
          </Link>
          <Link to="/landing-page">
            <li>Log Out</li>
          </Link>
        </ul>
      </div>

      {/*<div className={style.userMenu}>
				<img src={webLogo} alt='logo' />
				<div className={style.menuItems}>
					<ul className={style.userMenuList}>
						<Link to='/' style={{ textDecoration: 'none' }}>
							<li>
								<span>
									<HiViewGrid
										className={style.sideBarIcon}
										style={{ marginRight: '6rem', marginTop: '0.5rem' }}
									/>
								</span>
								Home
							</li>
						</Link>
						<Link to='/truck-request' style={{ textDecoration: 'none' }}>
							<li>
								<HiTruck className={style.sideBarIcon} />
								Truck Request
							</li>
						</Link>
						<Link to='/track-orders' style={{ textDecoration: 'none' }}>
							<li>
								<HiCube
									className={style.sideBarIcon}
									style={{ marginRight: '3rem' }}
								/>
								Track Orders
							</li>
						</Link>
						<Link to='/order-history' style={{ textDecoration: 'none' }}>
							<li>
								<RiAnticlockwise2Fill
									className={style.sideBarIcon}
									style={{ marginRight: '2.4rem' }}
								/>
								Order History
							</li>
						</Link>
						<Link
							to='/landing-page'
							style={{ textDecoration: 'none', marginTop: '8rem' }}>
							<li>
								<IoLogOut className={style.sideBarIcon} />
								Log Out
							</li>
						</Link>
					</ul>
				</div>
	</div>*/}

      {/* USER DETAILES */}

      {/* User Header */}
      <div className={style.userDetails}>
        <header className={style.userHeader}>
          <div className={style.menuBtn}>
            <div
              className={style.menuIcon}
              onClick={() => toggleSidebarVisibility()}
            >
              {show ? (
                <VscChromeClose style={{ width: "2rem" }} />
              ) : (
                <VscMenu style={{ width: "2rem" }} />
              )}
            </div>

            <img src={mobileLogo} alt="menu" />
          </div>
          <div className={style.profileHeader}>
            <IoNotifications className={style.bell} />
            <img src={userAvatar} alt="profileImg" />
            <div className={style.userTitle}>
              <p>Nweze Chidera</p>
              <span className={style.caption}>Cargo Owner</span>
            </div>
          </div>
        </header>

        {/* User Info */}
        <MainDashboard />
        {/* <div className={style.userInfo}>
					<h4 className={style.welcome}>
						Welcome <span className={style.userName}>Chidera</span>
						<span class='wave'>👋</span>
					</h4>
					<div className={style.userOrders}>
						<div className={style.order}>
							<img src={activeOrder} alt='active-order' />
							<div className={style.orderInfo}>
								<h5>Active Orders</h5>
								<span>0</span>
							</div>
						</div>
						<div className={style.order}>
							<img src={completedOrder} alt='completed-order' />
							<div className={style.orderInfo}>
								<h5>Completed Orders</h5>
								<span>0</span>
							</div>
						</div>
						<div className={style.order}>
							<img src={pendingOrder} alt='pending-order' />
							<div className={style.orderInfo}>
								<h5>Pending Orders</h5>
								<span>0</span>
							</div>
						</div>
					</div>
					<div className={style.orderHistory}>
						<div className={style.orderHistoryHeader}>
							<h4>Order History</h4>
							<div className={style.scrolls}>
								<button className={style.scrollButton}>
									<FaLessThan />
								</button>
								<button className={style.scrollButton}>
									<FaGreaterThan />
								</button>
							</div>
						</div>
						<div className={style.orderHistoryBody}>
							<img
								className={style.noOrderImage}
								src={noOrderImage}
								alt='no-order'
							/>
							<div className={style.orderHistoryInfo}>
								<h4>You’ve not made any orders yet</h4>
								<p>Your Order history will be displayed here.</p>
							</div>
						</div>
					</div>
				</div> */}
      </div>
    </div>
  );
};

export default UserDashboard;
