import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Shopcart from "./Shopcart";
import "./App.css";
import Navbar from "./Navbar";
import { CartProvider } from "./Context"; // Import the CartProvider

function App() {
  return (
    <div className="App">
      <CartProvider>
        {" "}
        {/* Wrap your application with CartProvider */}
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Shopcart />} />
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
