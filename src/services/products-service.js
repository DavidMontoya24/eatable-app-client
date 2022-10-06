import apiFetch from "./api-fetch";

export function getProducts() {
  return apiFetch("/products").then((data) => {
    return data;
  });
}

export function showProduct(id) {
  return apiFetch("/products/"+id).then((data) => {
    return data;
  });
}