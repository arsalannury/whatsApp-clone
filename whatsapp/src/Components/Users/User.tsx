import "./_user.scss";
import { Link, useHistory } from "react-router-dom";

function User({ name, photo, email }) {
  const history = useHistory();

  const navigateToCurrentChat = (email: string) => {
    if (email) {
      history.push(`/${email}`);  
    }
  };

  return (

    <div
      className="whatsapp_user_main"
      onClick={() => navigateToCurrentChat(email)}
    >
      <div className="user_image">
        <img referrerPolicy="no-referrer" src={photo} alt="user_profile" />
      </div>
      <div className="user_details_main">
        <div className="information_user">
          <p className="user_name">{name}</p>
          <p className="message_date">yesterday</p>
        </div>
        <p className="last_user_message">hey wow are you dood ?!</p>
      </div>
    </div>
    // </Link>
  );
}

export default User;
