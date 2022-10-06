import apiFetch from "./api-fetch";

export function createOrder(adress, items) {
  const body = {
    delivery_address: adress,
    items,
  };
  return apiFetch("/orders", { body }).then((data) => {
    return data;
  });
}

export function getOrders() {
  return apiFetch("/orders").then((data) => {
    return data;
  });
}
