import "./index.css";
import LoadWhatsApp from "./Components/LoadWhatsApp/LoadWhatsApp";
import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [loading, isLoading] = useState<boolean>(true);

  useEffect((): void => {
    setTimeout((): void => {
      isLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading && <LoadWhatsApp />}

    </>
  )
}

export default App;
