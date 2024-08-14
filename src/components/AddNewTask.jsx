import { useContext, useEffect, useRef } from "react"
import { AuthContext } from "../context/AuthContent"



export default function AddNewTask(props)
{
    function setAddFalse()
    {
        props.setNewAdd(false);
    }

    async function setAddTrue()
    {
        let inputData = (inputRef.current.value);
        console.log(ctx.userID)
        let encodedID = ctx.userID.split('@').join('').split('.').join('');
        
        let url = `https://test2-451c3-default-rtdb.firebaseio.com/users/${encodedID}/lists.json`
        try {
            const response = await fetch(url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(inputData)
            });
        
            if (!response.ok) {
              throw new Error('Failed to add task.');
            }
            props.setToggleUpdate();
            const data = await response.json();
            console.log('Task added with ID:', data.name); // Firebase returns the unique ID of the new task
          } catch (error) {
            console.error('Error adding task:', error);
          }

        props.setNewAdd(false);
    }


    const ctx = useContext(AuthContext);
    const inputRef = useRef()
    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.focus(); // Step 2: Focus the input field on render
      }
    }, []);
    return(
        <div className="absolute w-[98.5vw] h-[100vh]">
        <div onClick={setAddFalse} className=" z-10 hover:cursor-pointer fixed top-0 w-[98.5vw]  h-[100vh] bg-gray-800 opacity-75">
        </div>
        <div className="rounded-lg p-5  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-10   bg-white flex flex-col h-[300px] w-[70vh] gap-4 opacity-100  ">
            <h1 className={` 'text-primary-dark' text-3xl font-semibold `}>New Note</h1>
            <form >
            <input ref={inputRef}  className={` p-[6px] indent-1 w-[500px] 'outline-secondary-light ring-secondary-dark' border-secondary-lightrounded-md ring-2 rounded-md outline-1 outline-offset-4 `} type="text" />
            <button onClick={setAddFalse}  className="py-2 px-4 bg-white ring-2 ring-primary-dark rounded-md text-secondary-dark border-2 border-secondary-dark  hover:text-xl absolute  bottom-4  left-4" type="button">Cancel</button>
            <button onClick={setAddTrue}  className="py-2 px-4 rounded-md bg-secondary-light ring ring-secondary-dark text-white absolute bottom-4 hover:text-xl right-4" type="button">Apply</button>
            </form>
        </div>
        </div>
    )
}