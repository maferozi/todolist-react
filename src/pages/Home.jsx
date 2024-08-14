import { useContext } from "react";
import { AuthContext } from "../context/AuthContent";

export default function Home() {
  const ctx = useContext(AuthContext);
  return (
    <main
      className={`my-20 flex flex-col items-center justify-center gap-10 ${
        ctx.darkMode ? "text-white" : "text-primary-dark"
      }`}
    >
      <h1 className=" text-center font-bold opacity-90 text-7xl w-[45%]">
        Organize your work and life, finally.
      </h1>
      <p
        className={` text-center font-semibold text-2xl w-[45%] ${
          ctx.darkMode ? "text-white" : "text-secondary-light"
        } opacity-80`}
      >
        Simplify life for both you and your team. The world’s #1 task manager
        and to-do list app.
      </p>
      <img className="w-[60%] h-[60%]" src="/homeImg.png" alt="img" />
    </main>
  );
}

