import React from 'react'
import db , { auth, googleProvider } from "../../firebase"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GoogleIcon from '@mui/icons-material/Google';
import { useNavigate } from "react-router-dom";
import './Login.scss'

const Login = ({setUser}) => {
    const navigate = useNavigate();

    const signInWithGoogle = () => {
        auth.signInWithPopup(googleProvider)
        .then((result) => {
            const newUser = {
              fullname: result.user.displayName,
              email: result.user.email,
              photoURL: result.user.photoURL,
            };
            navigate("/");
            setUser(newUser);
            localStorage.setItem("user", JSON.stringify(newUser));
            db.collection("users").doc(result.user.email).set(newUser);
          })
          .catch((err) => alert(err.message));
    }

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-logo">
            <WhatsAppIcon/>
        </div>
        <p className="login-name">WhatsApp Web</p>
        <button
            onClick={signInWithGoogle}
          className="login-btn">
          <GoogleIcon/>
          Login with Google
        </button>
      </div>
    </div>
  )
}

export default Login