import { ToastContainer } from "react-toastify";
import { UserProvider } from "./provider/UserContext/UserContext";
import { RouterComponent } from "./routes";
import { GlobalStyles } from "./styles/global";

function App() {
  console.log("lakfen");

  return (
    <>
      <UserProvider>
        <RouterComponent />
      </UserProvider>
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
    </>
  );
}

export default App;
