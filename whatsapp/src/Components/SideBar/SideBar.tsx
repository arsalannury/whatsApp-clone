import FilterChatSvg from "./FilterChatSvg";
import MenuSvg from "./MenuSvg";
import MessageSvg from "./MessageSvg";
import SearchSvg from "./SearchSvg";
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
        <div className="search_bar">
          <div className="search_text_icon">
         <SearchSvg />
          <input type="text" className="whatsapp_search" placeholder="Search or start new chat" />
          </div>
          <div className="filter_chat_wrapper">
          <FilterChatSvg />
          </div>
        </div>
        <div className="chat_list"></div>
      </div>
    </>
  );
};

export default SideBar;
