import User from "../Users/User";
import FilterChatSvg from "./FilterChatSvg";
import MenuSvg from "./MenuSvg";
import MessageSvg from "./MessageSvg";
import SearchSvg from "./SearchSvg";
import StatusSvg from "./StatusSvg";
import "./_sidebar.scss";
import { useState, useEffect } from "react";
import { useAuthContext } from "../../Context/AuthContext";
import { db } from "../../firebaseConfig";

const SideBar: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [users, setUsers] = useState<any[]>([]);
  const { changeUser, user } = useAuthContext();
  const [searchText, setTextSearch] = useState<string>("");

  const changeMenuDisplay = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const getUsersFromDatabase = async () => {
      const response = await db.collection("users").onSnapshot((snapshot) => {
        setUsers(
          snapshot.docs.filter((doc) => doc.data()?.email !== user?.email)
        );
      });
    };
    getUsersFromDatabase();
  }, []);

  const searchUser = users.filter((user) => {
    if (searchText) {
      if (
        user.data().fullName.toLowerCase().includes(searchText.toLowerCase())
      ) {
        return user;
      }
    }
  });

  const userSearchResult = searchUser.map((user) => {
    return <User name={user.data().name} photo={user.data().photo} email={user.data().email} />;
  });

  return (
    <>
      <div className="whatsapp_sidebar">
        <div
          className="menu_container"
          style={{
            opacity: showMenu ? 1 : 0,
            visibility: showMenu ? "visible" : "hidden",
          }}
        >
          <span className="menu_item menu_item_group ">New group</span>
          <span className="menu_item menu_item_messages ">
            Started messages
          </span>
          <span className="menu_item menu_item_settings ">Settings</span>
          <span
            className="menu_item menu_item_logout"
            onClick={() => changeUser(null)}
          >
            Log out
          </span>
        </div>
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
            <MenuSvg menuDisplay={changeMenuDisplay} />
          </div>
        </div>
        <div className="search_bar">
          <div className="search_text_icon">
            <SearchSvg />
            <input
              type="text"
              className="whatsapp_search_input"
              placeholder="Search or start new chat"
              onInput={() => searchUser}
              value={searchText}
              onChange={(e) => setTextSearch(e.target.value)}
            />
          </div>
          <div className="filter_chat_wrapper">
            <FilterChatSvg />
          </div>
        </div>
        <div className="chat_list">
          {userSearchResult.length > 0 ? (
            userSearchResult
          ) : (
            <User name={"Arsalan"} photo={"profile.jpg"} email={"arsaawf"} />
          )}
        </div>
      </div>
    </>
  );
};

export default SideBar;
