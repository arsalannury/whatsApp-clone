import ChatPage from "../ChatPage/ChatPage";
import ChatPageEmptySvg from "../ChatPage/ChatPageEmptySvg";
import SideBar from "../SideBar/SideBar";
import "./_home.scss";

const Home: React.FC = () => {
  return (
    <>
      <div className="home_page">
        <SideBar />
        <ChatPage />
        {/* <ChatPageEmptySvg /> */}
      </div>
    </>
  );
};

export default Home;
