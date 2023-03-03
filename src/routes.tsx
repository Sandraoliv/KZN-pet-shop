// import React from "react";
import { Routes, Route } from "react-router-dom";
// import { NotFound } from "./pages/NotFound/notFound";
import { RegisterPage } from "./pages/RegisterPage";
// import { CartProvider } from "./provider/CartContext/CartContext";
// import { UserProvider } from "./provider/UserContext/UserContext";

export const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<RegisterPage />} />
      {/* <Route path="/register" element={<RegisterPage />} /> */}
      {/* <Route path='/shop' element={<ShopPage />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
    // <CartProvider>
    //   <UserProvider>
    //   </UserProvider>
    // </CartProvider>
  );
};
