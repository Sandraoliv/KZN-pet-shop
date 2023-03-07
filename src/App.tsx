import { ToastContainer } from "react-toastify";
import { RouterComponent } from "./routes";
import { GlobalStyles } from "./styles/global";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="main__container">
      <RouterComponent />
      <GlobalStyles />
      <ToastContainer
        position="top-right"
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
    </div>
  );
}

export default App;
