import User from "../Users/User";
import FilterChatSvg from "./FilterChatSvg";
import MenuSvg from "./MenuSvg";
import MessageSvg from "./MessageSvg";
import SearchSvg from "./SearchSvg";
import StatusSvg from "./StatusSvg";
import "./_sidebar.scss";
import { useState } from "react";
import Fade from "react-reveal/Fade";

const SideBar: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <>
      <div className="whatsapp_sidebar">
        <div className="header_chat_list">
        <div className="menu_container">
              <span className="menu_item menu_item_group ">New group</span>
              <span className="menu_item menu_item_messages ">
                Started messages
              </span>
              <span className="menu_item menu_item_settings ">Settings</span>
              <span className="menu_item menu_item_logout ">Log out</span>
            </div>
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
            <input
              type="text"
              className="whatsapp_search_input"
              placeholder="Search or start new chat"
            />
          </div>
          <div className="filter_chat_wrapper">
            <FilterChatSvg />
          </div>
        </div>
        <div className="chat_list">
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
        </div>
      </div>
    </>
  );
};

export default SideBar;
