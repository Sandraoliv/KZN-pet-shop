import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/loginPage";
import { NotFound } from "./pages/NotFound/notFound";
import { PaymentPage } from "./pages/PaymentPage/paymentPage";
import { RegisterPage } from "./pages/RegisterPage/registerPage";
import { ShopPage } from "./pages/ShopPage/shopPage";
import { SucessPage } from "./pages/SucessPage/sucessPage";
import { ShopProvider } from "./provider/ShopContext/ShopContext";
import { ProfilePage } from "./pages/ProfilePage/profilePage";
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
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/sucess" element={<SucessPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserProvider>
    </ShopProvider>
  );
};
