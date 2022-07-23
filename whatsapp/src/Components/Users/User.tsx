import "./_user.scss";

function User() {
  return (
    <div className="whatsapp_user_main">
      <div className="user_image">
        <img src="profile.jpg" alt="user_profile" />
      </div>
      <div className="user_details_main">
        <div className="information_user">
            <p className="user_name">Arsalan</p>
            <p className="message_date">yesterday</p>
        </div>
        <p className="last_user_message">
            hey wow are you dood ?!
        </p>
      </div>
    </div>
  );
}

export default User;
