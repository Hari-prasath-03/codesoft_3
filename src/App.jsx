import { Route, Routes, useNavigate} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import CreatePost from "./pages/CreatePost";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase/FireBaseConfig";

function App() {

  const [isAuth, setIsAuth] = useState(() => {
    const auth = localStorage.getItem("isAuth");
    return auth;
  });

  const navigate = useNavigate();

  const signOutUser = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    })
  }

  return (
    <>
      <Navbar signOut={signOutUser} isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
      </Routes>
    </>
  );
}

export default App;
