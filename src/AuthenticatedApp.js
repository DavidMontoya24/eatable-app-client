import { Navigate, Route, Routes } from 'react-router-dom';
import { ProductsProvider } from "./context/products-context";
import CartPage from './pages/Cart-page';
import DishPage from './pages/Dish-page';
import ProductsPage from "./pages/Products-page";
import ProfilePage from "./pages/Profile-page";
import CheckOut from './pages/Checkout-page';
import History from './pages/History-page';
import Navbar from './components/Navbar';

function AuthenticatedApp() {
  return (
    <div>
      <ProductsProvider>
          <Routes>
          <Route index element={<Navigate to="products" />} />
          <Route path="/products" element={<ProductsPage />} />   
          <Route path='/products/:id' element={<DishPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/history" element={<History />} />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      </ProductsProvider>
      <Navbar />
    </div>
  );
}

export default AuthenticatedApp;
