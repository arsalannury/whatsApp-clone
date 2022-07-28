import "./index.css";
import LoadWhatsApp from "./Components/LoadWhatsApp/LoadWhatsApp";
import { useEffect, useState } from "react";
import MainUi from "./Components/MainUi/MainUi";
import Login from "./Components/Login/Login";

function App() {
  const [loading, isLoading] = useState<boolean>(true);

  useEffect((): void => {
    setTimeout((): void => {
      isLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {/* <Login /> */}
      {/* {loading && <LoadWhatsApp />} */}
      <MainUi />
    </>
  );
}

export default App;
