import "./_mainUi.scss";
import { Switch, Route } from "react-router-dom";
import Login from "../Login/Login";
import Home from "../Home/Home";

const MainUi: React.FC = () => {
  return (
    <>
      <div className="main_ui">
        {/* <div className="logo">
          <img className="whatsapp_logo" src="logo.png" alt="whats_app_logo" />
          <span className="whatsapp_name">WHATSAPP WEB</span>
        </div>

        <Login /> */}

        <Home />
      </div>
    </>
  );
};

export default MainUi;
