import { createContext, useContext, useEffect, useState } from "react";
import { getProducts } from "../services/products-service";

const ProductsContext = createContext();
const cartKey = "cart-etable";

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState(
    JSON.parse(localStorage.getItem(cartKey)) || []
  );
  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch((error) => console.log(error));
  }, []);

  const total = selectedProducts
    .reduce((prev, curr) => {
      return prev + (curr.price * curr.quantity) / 100;
    }, 0)
    .toFixed(2);

  function addProduct(id) {
    const newProduct = products.find((product) => product.id === id);
    const newList = [...selectedProducts, { ...newProduct, quantity: 1 }];
    setSelectedProducts(newList);
    localStorage.setItem(cartKey, JSON.stringify(newList));
  }

  function deleteProduct(id) {
    const newList = selectedProducts.filter((product) => product.id !== id);
    setSelectedProducts(newList);
    localStorage.setItem(cartKey, JSON.stringify(newList));
  }

  function isAdded(id) {
    return selectedProducts.find((product) => product.id === id) ? true : false;
  }

  function setQuantity(id, qty) {
    const product = selectedProducts.find((product) => product.id === id);
    const otherProducts = selectedProducts.filter(
      (product) => product.id !== id
    );
    const newList = [...otherProducts, { ...product, quantity: qty }];
    setSelectedProducts(newList);
    localStorage.setItem(cartKey, JSON.stringify(newList));
  }

  function deleteCartInStorage() {
    localStorage.removeItem(cartKey);
    setSelectedProducts([]);
  }

  function searchProducts(query) {
    return products.filter((product) => {
      const queryText = query.toLowerCase();
      const [name, category, description] = [
        "name",
        "category",
        "description",
      ].map((key) => {
        return product[key].toLowerCase();
      });
      const cond1 = name.includes(queryText);
      const cond2 = category.includes(queryText);
      const cond3 = description.includes(queryText);
      return cond1 || cond2 || cond3;
    });

  }
  return (
    <ProductsContext.Provider
      value={{
        products,
        selectedProducts,
        total,
        addProduct,
        deleteProduct,
        isAdded,
        setQuantity,
        deleteCart: deleteCartInStorage,
        searchProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

function useProducts() {
  return useContext(ProductsContext);
}

export { ProductsProvider, useProducts };
