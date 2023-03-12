import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { NotFound } from "./pages/NotFound/notFound";
import { PaymentPage } from "./pages/PaymentPage/paymentPage";
import { RegisterPage } from "./pages/RegisterPage";
import { ShopPage } from "./pages/ShopPage/shopPage";
import { SucessPage } from "./pages/SucessPage/sucessPage";
<<<<<<< HEAD
import { ShopProvider } from "./provider/ShopContext/ShopContext";
=======
import { UserPage } from "./pages/UserPage/userPage";
import { CartProvider } from "./provider/CartContext/CartContext";
>>>>>>> b7512f4c13d47e23d5768ff4ce96b6a5e123374c
import { UserProvider } from "./provider/UserContext/UserContext";

export const RouterComponent = () => {
  let token = localStorage.getItem("@token");

  return (
    <ShopProvider>
      <UserProvider>
        <Routes>
          <Route path="/" element={<ShopPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
<<<<<<< HEAD
          <Route
            path="/payment"
            element={token ? <PaymentPage /> : <LoginPage />}
          />
          <Route
            path="/sucess"
            element={token ? <SucessPage /> : <LoginPage />}
          />
=======
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/sucess" element={<SucessPage />} />
          <Route path="/user" element={<UserPage />} />
>>>>>>> b7512f4c13d47e23d5768ff4ce96b6a5e123374c
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserProvider>
    </ShopProvider>
  );
};
