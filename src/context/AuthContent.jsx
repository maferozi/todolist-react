import { createContext, useEffect, useState } from "react";
import Login from "../components/Login";

// Initialize the context with default values
export const AuthContext = createContext({
  isLoggedIn: false,
  token: null, // Set default as null instead of false
  darkMode: false,
  userID: null,
  setLogin: (token) => {},
  setLogout: () => {},
  setToggleDark: () => {},
});

let logoutTimer;

function AuthContextProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [token, setTokenState] = useState(null);
  const [userID, setUserID] = useState(null);

  useEffect(() => {
    
    const token = localStorage.getItem("token") || null;
    const expireTime = localStorage.getItem("duration" || null);
    const userID = localStorage.getItem("userID" || null)
    const curr = new Date().getTime();
    const rem =  (new Date(expireTime).getTime()) - curr;
    console.log(expireTime);
    console.log(curr);
    console.log(rem);
    if (token != null && rem > 3600 && userID != null) {
      setLogin(token, userID ,rem);
    }
    else
    {
      setLogout();
    }
  }, [token]);

  function setLogout() {
    setTokenState(null);
    setIsLoggedIn(false);
    setUserID(null);
    localStorage.removeItem("userID");
    localStorage.removeItem("token");
    localStorage.removeItem("duration");
    clearTimeout(logoutTimer);
  }

  function setLogin(token, userID,expireIn) {
    if (token) {
      setIsLoggedIn(true);
      console.log(expireIn);
      setTokenState(token); // Use setTokenState to update token
      setUserID(userID);
      localStorage.setItem("token", token);
      localStorage.setItem("userID", userID);
      localStorage.setItem("duration", new Date(Date.now() + expireIn));
      logoutTimer = setTimeout(() => {
       setLogout();
      }, expireIn);
    } else {
      console.log("Unable to login: error");
    }
  }

  function setToggleDark() {
    setDarkMode((prev) => !prev);
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        userID,
        token, // Ensure token is passed in the context value
        darkMode,
        setLogin,
        setLogout,
        setToggleDark,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
