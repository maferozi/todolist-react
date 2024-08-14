import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContent";
export default function NavBar() {
  const ctx = useContext(AuthContext);
  return (
    <nav className={`max-w-[100%] flex flex-wrap items-center justify-between mx-auto p-4  ${ctx.darkMode?'shadow-slate-800': 'shadow-blue-100'} shadow-md h-auto`}>
      <NavLink className={"flex items-center space-x-3"} to={""}>
        <img className="h-10 rounded-md" src="/logo.png" alt="logo" />
        <span className={`self-center text-2xl font-semibold whitespace-nowrap  ${ctx.darkMode? 'text-white':'text-black'}`}>
          TodoList
        </span>
      </NavLink>
      <div className="flex flex-row items-center justify-evenly gap-2">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive
              ? "self-center text-xl font-semibold whitespace-nowrap p-3 rounded-lg bg-secondary-light text-white underline"
              : "self-center text-xl font-semibold whitespace-nowrap p-2 rounded-lg active:bg-secondary-light text-white bg-secondary-dark hover:bg-secondary-light"
          }
        >
          Home
        </NavLink>
        {ctx.isLoggedIn &&<NavLink className={({ isActive }) =>
            isActive
              ? "self-center text-xl font-semibold whitespace-nowrap p-3 rounded-lg bg-secondary-light text-white underline"
              : "self-center text-xl font-semibold whitespace-nowrap p-2 rounded-lg active:bg-secondary-light text-white bg-secondary-dark hover:bg-secondary-light"
          } to={`/todolist`}>TodoList</NavLink>}
        {!ctx.isLoggedIn && <NavLink className={({ isActive }) =>
            isActive
              ? "self-center text-xl font-semibold whitespace-nowrap p-3 rounded-lg bg-secondary-light text-white underline"
              : "self-center text-xl font-semibold whitespace-nowrap p-2 rounded-lg active:bg-secondary-light text-white bg-secondary-dark hover:bg-secondary-light"
          } to={`/auth/login`}>Login</NavLink>}
        {!ctx.isLoggedIn && <NavLink className={({ isActive }) =>
            isActive
              ? "self-center text-xl font-semibold whitespace-nowrap p-3 rounded-lg bg-secondary-light text-white underline"
              : "self-center text-xl font-semibold whitespace-nowrap p-2 rounded-lg active:bg-secondary-light text-white bg-secondary-dark hover:bg-secondary-light"
          } to={`/auth/register`}>Register</NavLink>}
        {(ctx.isLoggedIn) && <NavLink onClick={ctx.setLogout} className="self-center text-xl font-semibold whitespace-nowrap p-2 rounded-lg active:bg-secondary-light text-white bg-secondary-dark hover:bg-secondary-light"
          >Logout</NavLink>}

        <button
          className="p-2 w-10 h-10  rounded-lg bg-secondary-dark "
          onClick={ctx.setToggleDark}
        >
          <img
            className='w-auto h-auto'
            src={ctx.darkMode ? "/sun.png" : "/moon.png"}
            alt="toogleDarkMode"
          />
        </button>
      </div>
    </nav>
  );
}
