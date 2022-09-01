import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TagFacesRoundedIcon from "@mui/icons-material/TagFacesRounded";
import "./_chatComponent.scss";
import { ChatComponentInterface } from "../InterFaces/ChatComponentInterface";
// import MessageSvg from "./MessageSvg";

const ChatComponent: React.FC<ChatComponentInterface> = ({
  senderEmail,
  recieverEmail,
  messageText,
  time,
}: ChatComponentInterface) => {
  const messageTime = new Date().toLocaleTimeString();

  return (
    <>
      <div className="container">
        <div className="react">
          <TagFacesRoundedIcon />
        </div>
        <div className="chat-container">
          <div className="message-options">
            <KeyboardArrowDownIcon />
          </div>
          <span className="message-text">
          {messageText}
          </span>
          <div className="time-done-situation">
            <span className="time">{new Date(time.toDate()).toLocaleString()}</span>
            <DoneIcon className="done-icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatComponent;
