import { ToastContainer } from "react-toastify";
import { RouterComponent } from "./routes";
import { GlobalStyles } from "./styles/global";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <RouterComponent />
      <GlobalStyles />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default App;
