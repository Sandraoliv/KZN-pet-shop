import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { NotFound } from "./pages/NotFound/notFound";
import { PaymentPage } from "./pages/PaymentPage/paymentPage";
import { RegisterPage } from "./pages/RegisterPage";
import { ShopPage } from "./pages/ShopPage/shopPage";
import { SucessPage } from "./pages/SucessPage/sucessPage";
import { ShopProvider } from "./provider/ShopContext/ShopContext";
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
          <Route
            path="/payment"
            element={token ? <PaymentPage /> : <LoginPage />}
          />
          <Route
            path="/sucess"
            element={token ? <SucessPage /> : <LoginPage />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserProvider>
    </ShopProvider>
  );
};
