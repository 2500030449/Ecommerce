import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Filters from "./components/Filters";
import ProductCard from "./components/ProductCard";
import MyOrders from "./components/MyOrders";
import products from "./components/products";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <>
      <Header cartCount={cartItems.length} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filters />
              <div className="products-container">
                {products.map((item) => (
                  <ProductCard
                    key={item.id}
                    product={item}
                    addToCart={addToCart}
                  />
                ))}
              </div>
            </>
          }
        />

        <Route
          path="/myorders"
          element={<MyOrders cartItems={cartItems} />}
        />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
