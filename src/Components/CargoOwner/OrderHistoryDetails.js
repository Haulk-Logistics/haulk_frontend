import React, { useEffect } from 'react';
import { HiArrowLeft } from 'react-icons/hi';
import SideBar from './SideBar';
import style from './OrderHistoryDetails.module.css';
import NavBar from './NavBar';
import OrderHistoryData from './OrderHistoryData';


const OrderHistoryDetails = () => {
  return (
		<div className={style.orderHistoryDetail__container}>
			<SideBar />
			<div className={style.orderHistoryDetail__section}>
				<NavBar />
				<div className={style.orderHistoryDetail__subSection}>
					<div className={style.orderHistoryDetail__heading}>
						<HiArrowLeft style={{ color: '#1692AD', width: '1.2rem' }} />
						{'  '}
						<h4>Order History</h4>
					</div>

					{/* Order Details Table */}
					<div className={style.orderDetail__table}>
						<tbody>
							<tr>
								<td>
									<h5>Truck Driver</h5>
								</td>
								<td>{OrderHistoryData.truckDriver}</td>

								<td>
									<h5>Order ID</h5>
								</td>
								<td>{OrderHistoryData.orderID}</td>
							</tr>

							<tr>
								<td>
									<h5>Phone Number</h5>
								</td>
								<td>{OrderHistoryData.phoneNo}</td>

								<td>
									<h5>Nature of Goods</h5>
								</td>
								<td>{OrderHistoryData.natureOfGoods}</td>
							</tr>

							<tr>
								<td>
									<h5>License Number</h5>
								</td>
								<td>{OrderHistoryData.licenseNo}</td>

								<td>
									<h5>Truck Size</h5>
								</td>
								<td>{OrderHistoryData.truckSize}</td>
							</tr>

							<tr>
								<td>
									<h5>Date Requested</h5>
								</td>
								<td>{OrderHistoryData.dateRequested}</td>

								<td>
									<h5>Arrival Date</h5>
								</td>
								<td>{OrderHistoryData.arrivalDate}</td>
							</tr>

							<tr>
								<td>
									<h5>Pick up Location</h5>
								</td>
								<td>{OrderHistoryData.pickUpLocation}</td>

								<td>
									<h5>Shipping Line</h5>
								</td>
								<td>{OrderHistoryData.shippingLine}</td>
							</tr>

							<tr>
								<td>
									<h5>Drop off Location</h5>
								</td>
								<td>{OrderHistoryData.dropOffLocation}</td>

								<td>
									<h5>Container No.</h5>
								</td>
								<td>{OrderHistoryData.containerNo}</td>
							</tr>
						</tbody>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrderHistoryDetails;
