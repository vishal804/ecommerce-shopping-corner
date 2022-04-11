import "./App.css";
import { Header } from "./component";
import { Routes, Route } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoute";
import {
  CartPage,
  HomePage,
  ProductPage,
  Signin,
  Signup,
  WishlistPage,
} from "./pages";
import Mockman from "mockman-js";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
        </Route>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </>
  );
}

export default App;
