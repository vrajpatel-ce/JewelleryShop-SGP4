import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Register from "./components/Register";
import { ProductProvider } from "./context/ProductContext";
import { LoginProvider } from "./context/LoginContext";
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import Offers from './components/Offers';
import Ambassador from './components/Ambassador';
// import Aboutus from './components/Aboutus';

function App() {
  return (
    <LoginProvider>
      <CartProvider>
        <ProductProvider>
          <Router>
            <div className="min-h-screen bg-gray-50">
              <Navigation />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<ProductList />} />
                  <Route path="/products/:id" element={<ProductDetail />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/offers" element={<Offers />} />
                  {/* <Route path="/aboutus" element={<Aboutus />} /> */}
                  <Route path="/ambassador" element={<Ambassador />} />
                </Routes>
              </main>
            </div>
          </Router>
        </ProductProvider>
      </CartProvider>
    </LoginProvider>
  );
}

export default App;
