import React, {useEffect} from "react";
import { getOrders } from "../../services/orderService";
import  OrdersTable  from "../Orders/orders";

function Dashboard (){

  useEffect(() => {
    const data =getOrders()
    console.log(data)
  }, []);

    return(
  <div>
    <h1 style={{backgroundColor:"white"}}>AdminPanel</h1>
    <OrdersTable/>
  </div>
    )
}

export default Dashboard;