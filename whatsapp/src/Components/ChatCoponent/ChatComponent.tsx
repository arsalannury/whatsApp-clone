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
      <div className="container">
        <div className="react">
          <TagFacesRoundedIcon />
        </div>
        <div className="chat-container">
          <div className="message-options">
            <KeyboardArrowDownIcon />
          </div>
          <span className="message-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            natus molestias commodi at doloremque pariatur quod iure minus quia
            ducimus vero delectus deserunt, quas ipsam blanditiis, et sapiente
            animi magni fugiat suscipit aliquid veritatis. Saepe delectus
            consequatur magnam ducimus accusantium quibusdam assumenda harum
            voluptatibus facere tenetur iste, quam pariatur nostrum doloremque
            voluptas voluptate? Obcaecati vero doloribus voluptatibus velit
            officiis accusamus quo, tenetur architecto atque harum saepe
            nesciunt iste dolorum facere asperiores commodi ullam labore aliquid
            delectus magni fugit dolorem laudantium. Impedit, nihil amet?
            Perspiciatis quam possimus tempora! Quam tempora alias,
            exercitationem corrupti autem laborum debitis tenetur atque,
            consectetur, libero repudiandae!
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
