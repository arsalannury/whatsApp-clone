import "./_login.scss";
import QRCode from "react-qr-code";
import { useHistory } from "react-router-dom";
import { auth, db, googleProvider } from "../../firebaseConfig";
import { useAuthContext } from "../../Context/AuthContext";

const Login: React.FC = () => {
  const { changeUser } = useAuthContext();

  const history = useHistory();
  const signInWhatsApp = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((result) => {
        const newLoginUser = {
          fullName: result.user?.displayName,
          email: result.user?.email,
          photo: result.user?.photoURL,
        };
        const userEmail: any = result.user?.email;
        history.replace("/");
        changeUser(newLoginUser);
        localStorage.setItem("user",JSON.stringify(newLoginUser));

        db.collection("users").doc(userEmail).set(newLoginUser);
      })
      .catch((error) => {
        throw new Error(error.message);
      })
  };

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
          <button className="login" onClick={signInWhatsApp}>
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
