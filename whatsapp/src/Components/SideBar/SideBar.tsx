import MenuSvg from "./MenuSvg";
import MessageSvg from "./MessageSvg";
import StatusSvg from "./StatusSvg";
import "./_sidebar.scss";

const SideBar: React.FC = () => {
  return (
    <>
      <div className="whatsapp_sidebar">
        <div className="header_chat_list">
          <div className="avatar">
            <img
              src="profile.jpg"
              alt="profile image"
              className="profile_img"
            />
          </div>
          <div className="icons">
            <StatusSvg />
            <MessageSvg />
            <MenuSvg />
          </div>
        </div>
        <div className="search_bar"></div>
        <div className="chat_list"></div>
      </div>
    </>
  );
};

export default SideBar;
