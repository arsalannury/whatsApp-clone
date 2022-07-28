import ChatPage from "../ChatPage/ChatPage";
import ChatPageEmptySvg from "../ChatPage/ChatPageEmptySvg";
import SideBar from "../SideBar/SideBar";
import "./_home.scss";
import {Switch,Route} from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      <div className="home_page">
        <SideBar />
        <Switch>
          <Route path={'/'} exact component={ChatPageEmptySvg} />
          <Route path={'/chat-page'} component={ChatPage} />
        </Switch>
      </div>
    </>
  );
};

export default Home;
