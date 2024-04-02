import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import Navbar from "./Navbar";
import ProductDetail from "./ProductDetail";
import Footer from "./Footer";
import Contact from "./Contact";
import Product from "./Product";
import Login from "./Login";

import PrivateRoute from "./PrivateRoute";
import Checkout from "./Checkout";
import LogOut from "./LogOut";

const RoutePages = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/ProductDetail/:userId" element={<ProductDetail />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/LogOut" element={<LogOut />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route
            path="/Checkout"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default RoutePages;
