import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TagFacesRoundedIcon from "@mui/icons-material/TagFacesRounded";
import "./_chatComponent.scss";
// import MessageSvg from "./MessageSvg";

const ChatComponent: React.FC = () => {
  const messageTime = new Date().toLocaleTimeString();

  return (
    <>
      <div className="container" style={{ padding: "50px 9px 0 9px" }}>
        <div className="chat-container">
          <span className="message-text">nikzadam</span>
          <div className="time-done-situation">
            <span className="time">{messageTime}</span>
            <DoneIcon className="done-icon" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="chat-container">
          {/* <MessageSvg /> */}
          <span className="message-text">.</span>
          <div className="time-done-situation">
            <span className="time">{messageTime}</span>
            <DoneIcon className="done-icon" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="chat-container">
          <span className="message-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus,
            debitis. Recusandae ullam dolores exercitationem, qui nulla quasi
            earum rem, nesciunt quam voluptatem vero reprehenderit laudantium
            perspiciatis, aliquam sequi et explicabo! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Delectus, debitis. Recusandae ullam
            dolores exercitationem, qui nulla quasi earum rem, nesciunt quam
            voluptatem vero reprehenderit laudantium perspiciatis, aliquam sequi
            et explicabo!
          </span>
          <div className="time-done-situation">
            <span className="time">{messageTime}</span>
            <DoneIcon className="done-icon" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="chat-container">
          <span className="message-text">
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus,
            debitis. Recusandae ullam dolores exercitationem, qui nulla quasi
            earum rem, nesciunt quam voluptatem vero reprehenderit laudantium
            perspiciatis, aliquam sequi et explicabo! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Delectus, debitis. Recusandae ullam
            dolores exercitationem, qui nulla quasi earum rem, nesciunt quam
            voluptatem vero reprehenderit laudantium perspiciatis, aliquam sequi
            et explicabo! Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Delectus, debitis. Recusandae ullam dolores exercitationem,
            qui nulla quasi earum rem, nesciunt quam voluptatem vero
            reprehenderit laudantium perspiciatis, aliquam sequi et explicabo!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus,
            debitis. Recusandae ullam dolores exercitationem, qui nulla quasi
            earum rem, nesciunt quam voluptatem vero reprehenderit laudantium
            perspiciatis, aliquam sequi et explicabo!
          </span>
          <div className="time-done-situation">
            <span className="time">{messageTime}</span>
            <DoneIcon className="done-icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatComponent;
