/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../../firebase/FireBaseConfig";
import { signInWithPopup } from "firebase/auth";
import "./Login.css";

const Login = ({ setIsAuth = () => {} }) => {
  const navigate = useNavigate();

  const signInWithBoogle = () => {
    signInWithPopup(auth, provider).then(() => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };

  return (
    <div className="flex justify-center items-center h-[calc(100vh-80px)]">
      <div className="flex flex-col items-center gap-10">
        <p className="font-semibold text-3xl drop-shadow-2xl">Sign In with Google to continue.!</p>
        <button
          className="login-with-google-btn transition-all hover:scale-105"
          onClick={signInWithBoogle}
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
