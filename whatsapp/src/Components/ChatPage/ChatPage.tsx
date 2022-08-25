import React, { SyntheticEvent, useState, useEffect } from "react";
import MenuSvg from "../SideBar/MenuSvg";
import AttachFileSvg from "./AttachFileSvg";
import LensSvg from "./LensSvg";
import StickerSvg from "./StickerSvg";
import VoiceSvg from "./VoiceSvg";
import Picker from "emoji-picker-react";
import "./_chatPage.scss";
import { useParams } from "react-router-dom";
import ChatComponent from "../ChatCoponent/ChatComponent";
import { db } from "../../firebaseConfig";
import firebase from "firebase";
import { useAuthContext } from "../../Context/AuthContext";
import { ChatUserInterface } from "../InterFaces/ChatStateInterface";

const ChatPage: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [emoji, setEmoji] = useState<boolean>(false);
  const [chat, setChat] = useState<
    ChatUserInterface["user"] | firebase.firestore.DocumentData
  >();
  const [messageData,setMessageData] = useState<firebase.firestore.DocumentData[]>([])

  const { userId } = useParams();
  const { user, changeUser } = useAuthContext();

  useEffect(() => {
    const user = async () => {
      const result = await db
        .collection("users")
        .doc(userId)
        .onSnapshot((snapshot) => {
          console.log(snapshot.data());
          const data = snapshot.data();
          setChat(data);
        });
    };
    user();
  }, []);

  const handleChangeMssage = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setMessage(event.target.value);
  };

  const onEmojiClick = (event, emojiObject) => {
    setMessage(message + emojiObject.emoji);
  };

  const handleStickerShow = (): void => {
    setEmoji(!emoji);
  };

  const sendMessage = (event) => {

    if (event.code === "Enter") {
      if (userId) {
        const content = {
          messageText: message,
          senderEmail: user.email,
          recieverEmail: userId,
          time: firebase.firestore.Timestamp.now(),
        };
        
        db.collection('chats').doc(user.email).collection("messages").add(content);
        db.collection('chats').doc(userId).collection("messages").add(content);
        db.collection("chatList").doc(user.email).collection("list").doc(userId).set({
          email:chat?.email,
          fullName:chat?.fullName,
          photo:chat?.photo,
          lastMessage:message
        })
        db.collection("chatList").doc(userId).collection("list").doc(user.email).set({
          email:user.email,
          fullName:user.fullName,
          photo:user.photo,
          lastMessage:message
        })

        setMessage("");
      }
    }
  };

  const getMessagesFromFireStore = async () => {
      const result = await db.collection("chat").doc(userId).collection("messages").orderBy("time","asc").onSnapshot((snapShot) => {

        let messages = snapShot.docs.map((doc) => doc.data())

        let newMessage = messages.filter((message) => 
        message.senderEmail === (user.email || userId) ||
        message.rerecieverEmail === (user.email || userId)
        )

        setMessageData(newMessage);
      })
  }

  return (
    <div className="chat-page-container">
      {emoji && <Picker onEmojiClick={onEmojiClick} />}
      <div className="information-user">
        <div className="all-user-detail">
          <img src={chat?.photo} alt="profile-user-img" />

          <div className="details-user">
            <p className="user-name">{chat?.fullName}</p>
            <p className="user-last-online">last seen today at 12:03 PM</p>
          </div>
        </div>

        <div className="chat-menu">
          <LensSvg />
          <MenuSvg />
        </div>
      </div>

      <div className="chat-main-content">
        <ChatComponent />
        <ChatComponent />
        <ChatComponent />
        <ChatComponent />
        <ChatComponent />
        <ChatComponent />
        <ChatComponent />
      </div>

      <div className="message-send-section">
        <div className="icon-actions">
          <StickerSvg clicked={handleStickerShow} />
          <AttachFileSvg />
        </div>

        <input
          type="text"
          name="message"
          id="message"
          className="send-message-input"
          placeholder="Type a message"
          value={message}
          onChange={(event) => {
            handleChangeMssage(event);
          }}
          onKeyDown={(e) => {
            sendMessage(e);
          }}
        />

        <VoiceSvg />
      </div>
    </div>
  );
};

export default ChatPage;
