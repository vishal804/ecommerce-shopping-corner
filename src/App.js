import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Footer, HomePage } from "./pages";
import { Header } from "./component/header/Header";
function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
