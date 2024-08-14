import { useContext } from "react";
import { AuthContext } from "../../context/AuthContent";

export default function Footer() {
  const ctx = useContext(AuthContext);
  return (
    <footer className={` ${ctx.darkMode? 'bg-primary-dark': 'bg-white'}`}>
        <hr className="w-[80%] mx-auto my-10" />
      <div className="flex flex-row justify-center gap-24 pb-10">
        <div className="max-w-[30%]">
          <div className={"flex items-center space-x-3"} to={""}>
            <img className="h-10 rounded-md" src="/logo.png" alt="logo" />
            <span
              className={`self-center text-2xl font-semibold whitespace-nowrap  ${
                ctx.darkMode ? "text-white" : "text-black"
              }`}
            >
              TodoList
            </span>
          </div>
          <p
            className={`self-center text-lg ${
              ctx.darkMode ? "text-white" : "text-black"
            }`}
          >
            Join millions of people who organize work and life with Todoist.
          </p>
        </div>
        <div className="flex flex-row gap-10">
            <div className="flex flex-col gap-2 max-w-24 items-center">
                <p className={`mb-4 font-semibold self-center ${
              ctx.darkMode ? "text-white" : "text-black"
            }`}>Features</p>
             <p className={`self-center ${
              ctx.darkMode ? "text-white" : "text-black"
            }`}>How it works</p>
             <p className={`self-center ${
              ctx.darkMode ? "text-white" : "text-black"
            }`}>Team</p>
             <p className={`self-center ${
              ctx.darkMode ? "text-white" : "text-black"
            }`}>Pricing</p>
             <p className={`self-center ${
              ctx.darkMode ? "text-white" : "text-black"
            }`}>template</p>
            </div>
            <div className="flex flex-col gap-2 max-w-24 items-center">
                <p className={`mb-4 font-semibold self-center ${
              ctx.darkMode ? "text-white" : "text-black"
            }`}>Resources</p>
             <p className={`self-center ${
              ctx.darkMode ? "text-white" : "text-black"
            }`}>How it works</p>
             <p className={`self-center ${
              ctx.darkMode ? "text-white" : "text-black"
            }`}>Team</p>
             <p className={`self-center ${
              ctx.darkMode ? "text-white" : "text-black"
            }`}>Pricing</p>
             <p className={`self-center ${
              ctx.darkMode ? "text-white" : "text-black"
            }`}>template</p>
            <p className={`self-center ${
              ctx.darkMode ? "text-white" : "text-black"
            }`}>Pricing</p>
             <p className={`self-center ${
              ctx.darkMode ? "text-white" : "text-black"
            }`}>template</p>
            </div>
            <div className="flex flex-col gap-2 max-w-24 items-center">
                <p className={`mb-4 font-semibold self-center ${
              ctx.darkMode ? "text-white" : "text-black"
            }`}>Company</p>
             <p className={`self-center ${
              ctx.darkMode ? "text-white" : "text-black"
            }`}>How it works</p>
             <p className={`self-center ${
              ctx.darkMode ? "text-white" : "text-black"
            }`}>Team</p>
             <p className={`self-center ${
              ctx.darkMode ? "text-white" : "text-black"
            }`}>Pricing</p>
             <p className={`self-center ${
              ctx.darkMode ? "text-white" : "text-black"
            }`}>template</p>
            </div>
            <div className="flex flex-col gap-6">
                <img className="mt-5 w-7 h-7" src="/facebook.png" alt="fb" />
                <img className="w-7 h-7" src="/instagram.png" alt="in" />
                <img className="w-7 h-7" src="/whatsapp.png" alt="wa" />
                <img className="w-7 h-7" src="/twitter.png" alt="x" />
                
                
            </div>
        </div>
      </div>
    </footer>
  );
}
