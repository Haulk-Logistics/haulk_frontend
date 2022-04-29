import React, {useEffect} from "react";
import Tables from "../Table/Tables";
import style from "./OrderHistory.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cargoOwnerOrderHistory } from "../../Store/Actions/cargoOwnerOrders";

const CargoOrderHistory = () => {
  const dispatch = useDispatch();
  const { loading, orderHistory } = useSelector(
    (state) => state.cargoOwnerOrders
  );
  // const pendings = orders && orders.filter(x => x.order_status != "dropped_off")
  // console.log(pendings)
  // console.log( active, orders);
  useEffect(() => {
    dispatch(cargoOwnerOrderHistory());
  }, []);

  return (
    <div className={style.OrderHistory__container}>
      {
       ( !loading && orderHistory ) ?
       <Tables
       title="Order History"
       header={[
         "ID",
         "Date Requested",
         "Status",
         "Truck Type",
         "Arrival Date",
         "",
       ]}
       content={orderHistory && orderHistory}
     /> : <div> Loading.... </div>
      }
    </div> 
  );
};

export default CargoOrderHistory;
