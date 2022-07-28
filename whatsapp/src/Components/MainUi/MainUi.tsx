import "./_mainUi.scss";
import Login from "../Login/Login";
import Home from "../Home/Home";
import { useState } from "react";

const MainUi: React.FC = () => {
  const [user, setUser] = useState(true);
  return (
    <>
      <div className="main_ui">
        {user ? (
          <Home />
        ) : (
          <>
            <div className="logo">
              <img
                className="whatsapp_logo"
                src="logo.png"
                alt="whats_app_logo"
              />
              <span className="whatsapp_name">WHATSAPP WEB</span>
            </div>

            <Login />
          </>
        )}
      </div>
    </>
  );
};

export default MainUi;
