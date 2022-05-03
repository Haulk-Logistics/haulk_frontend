import React from 'react';
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
						<HiArrowLeft style={{ color: '#1692AD', width: '2rem', marginTop: '0.4rem' }} />
						{'  '}
						<h4>Order History</h4>
					</div>

					{/* Order Details Table */}
					<div className={style.orderDetail__table}>
						<tbody>
							{/* Column One */}
							<td className={style.orderDetails__col1}>
								<tr>
									<td>
										<h5>Truck Driver</h5>
									</td>
									<td>{OrderHistoryData.truckDriver}</td>
								</tr>

								<tr>
									<td>
										<h5>Phone Number</h5>
									</td>
									<td>{OrderHistoryData.phoneNo}</td>
								</tr>

								<tr>
									<td>
										<h5>License Number</h5>
									</td>
									<td>{OrderHistoryData.licenseNo}</td>
								</tr>

								<tr>
									<td>
										<h5>Date Requested</h5>
									</td>
									<td>{OrderHistoryData.dateRequested}</td>
								</tr>

								<tr>
									<td>
										<h5>Pick up Location</h5>
									</td>
									<td>{OrderHistoryData.pickUpLocation}</td>
								</tr>

								<tr>
									<td>
										<h5>Drop off Location</h5>
									</td>
									<td>{OrderHistoryData.dropOffLocation}</td>
								</tr>
							</td>

							{/* Column 2 */}
							<td className={style.orderDetails__col2}>
								<tr>
									<td>
										<h5>Order ID</h5>
									</td>
									<td>{OrderHistoryData.orderID}</td>
								</tr>

								<tr>
									<td>
										<h5>Nature of Goods</h5>
									</td>
									<td>{OrderHistoryData.natureOfGoods}</td>
								</tr>

								<tr>
									<td>
										<h5>Truck Size</h5>
									</td>
									<td>{OrderHistoryData.truckSize}</td>
								</tr>

								<tr>
									<td>
										<h5>Arrival Date</h5>
									</td>
									<td>{OrderHistoryData.arrivalDate}</td>
								</tr>

								<tr>
									<td>
										<h5>Shipping Line</h5>
									</td>
									<td>{OrderHistoryData.shippingLine}</td>
								</tr>

								<tr>
									<td>
										<h5>Container No.</h5>
									</td>
									<td>{OrderHistoryData.containerNo}</td>
								</tr>
							</td>
						</tbody>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrderHistoryDetails;
