import React, { Component } from "react";
import Table from "../table/table";
import { getOrders } from "../../services/orderService";
import "./orders.css";
class OrdersTable extends Component {

    state = {
        orders: [],
      };
    
      async componentDidMount() {
        const orders = await getOrders();
        console.log(orders)
        this.setState({ orders });
      }

  columns = [
    {path:"booking", label: "Booking ID"},
    {path:"_id", label: "ID"},
    {path:"date", label: "Date"},
    
  ];

  render() {
    const { orders } = this.state;

    return (
      <div className="admin">
      <Table 
        columns={this.columns}
        data={orders}
        
      />
      
      </div>
    );
  }
}

export default OrdersTable;
