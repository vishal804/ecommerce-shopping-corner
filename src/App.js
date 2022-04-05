import "./App.css";
import { Routes, Route } from "react-router-dom";
import { CartPage, HomePage, ProductPage } from "./pages";
import { Header } from "./component";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;
