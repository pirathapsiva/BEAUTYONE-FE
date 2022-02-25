import http from "./httpService";

const apiEndpoint = "http://localhost:4000/booking";


export async function getOrders() {
    const {
      data: { orders },
    } = await http.get(apiEndpoint);
    return orders;
  }