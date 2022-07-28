import "./_login.scss";
import QRCode from "react-qr-code";
import {useHistory} from 'react-router-dom';
import { auth, googleProvider } from "../../firebaseConfig";

const Login: React.FC = () => {

  const signInWhatsApp = () => {
    const history = useHistory()
    auth.signInWithPopup(googleProvider)
    .then((result) => {
      const newLoginUser = {
        fullName : result.user?.displayName,
        email : result.user?.email,
        photo : result.user?.photoURL
      }
      history.replace('/')
    })
  }

  return (
    <>
      <div className="login_section">
        <div className="qr_code">
          <span>Github Repository</span>
          <QRCode
            value="https://github.com/arsalannury/whatsApp-clone"
            target="https://github.com/arsalannury/whatsApp-clone"
            size={150}
          />
        </div>
        <hr className="hr" />
        <div className="login_btn">
          <button className="login">
            <span className="login_text">Login with google</span>
            <span className="login_text_replace">Enjoy whats app</span>
            <img src="google.png" alt="google_login" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
