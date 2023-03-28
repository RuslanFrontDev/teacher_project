import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

import Cart from "./pages/Cart";
import CreateProduct from "./pages/CreateProduct";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/create-product" element={<CreateProduct />} />
        </Routes>
      
    </div>
  );
}

export default App;
