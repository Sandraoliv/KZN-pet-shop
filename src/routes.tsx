import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { NotFound } from "./pages/NotFound/notFound";
import { PaymentPage } from "./pages/PaymentPage/paymentPage";
import { RegisterPage } from "./pages/RegisterPage";
import { ShopPage } from "./pages/ShopPage";
import { CartProvider } from "./provider/CartContext/CartContext";
import { UserProvider } from "./provider/UserContext/UserContext";

export const RouterComponent = () => {
  return (
    <CartProvider>
      <UserProvider>
        <Routes>
          <Route path="/" element={<ShopPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserProvider>
    </CartProvider>
  );
};
