import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage, ProductPage } from "./pages";
import { Footer, Header } from "./component";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
