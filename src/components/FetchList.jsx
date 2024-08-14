import { useContext, useRef } from "react";
import { AuthContext } from "../context/AuthContent";

export default function FetchList(props) {
    let checkRef = useRef();
  async function deleteTask() {
    const encodedID = ctx.userID.split("@").join("").split(".").join("");

    // Construct the URL for the specific task
    const url = `https://test2-451c3-default-rtdb.firebaseio.com/users/${encodedID}/lists/${props.noteId}.json`;

    try {
      const response = await fetch(url, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete task.");
      }
      else
      {
        checkRef.current.checked =  !checkRef.current.checked;
        props.setToggleUpdate();

      }

      console.log(`Task with key ${taskKey} has been deleted successfully.`);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  }

  const ctx = useContext(AuthContext);
  console.log(props);
  return (
    <>
      <div
        className={`flex min-h-16 p-4 rounded-t-lg mr-10  flex-row text-xl justify-items-start items-center gap-4 ${
          ctx.darkMode
            ? "text-white bg-gray-900"
            : "text-primary-dark bg-slate-100"
        }`}
      >
        <input ref={checkRef} onChange={deleteTask} className="w-6 h-6" type="checkbox" />
        <h1 className={`font-bold `}>Note #{props.id}:</h1>
        <p className="font-semibold">{props.noteValue}</p>
      </div>
      <hr className="mx-auto w-4/5  my-3" />
    </>
  );
}
