import NavBar from "./NavBar";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContent";
import Foot from "./Footer";
export default function MainLayout(props) {
  const ctx = useContext(AuthContext);

  return (
    <div
      className={` ${ctx.darkMode ? "bg-primary-dark" : "bg-white"}`}
    >
      <NavBar />
      {props.children}
      
        <Foot />
      
    </div>
  );
}
