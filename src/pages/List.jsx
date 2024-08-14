import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContent";
import AddNewTask from "../components/AddNewTask";
import FetchList from "../components/FetchList";

function shallowEqual(obj1, obj2) {
    const entries1 = Object.entries(obj1);
    const entries2 = Object.entries(obj2);
    
    
  
    if (entries1.length !== entries2.length) {
      return false;
    }
  
    return entries1.every(([key, value]) => Object.is(value, obj2[key]));
  }


export default function List() {
  const [isNewTask, setIsNewTask] = useState(false);
  const [data, setData] = useState([])
  const ctx = useContext(AuthContext);
  const [update, setUpdate] = useState(false);

  function setToggleUpdate()
  {
    setUpdate(pre=>!pre);
  }
  function newTaskToggle() {
    setIsNewTask((pre) => !pre);
  }
  let arr;

  useEffect(() =>{
    async function itemFetch(){
    let encodedID = ctx.userID.split("@").join("").split(".").join("");
  
    let url = `https://test2-451c3-default-rtdb.firebaseio.com/users/${encodedID}/lists.json`;
  
    console.log('test1')
    try {
      const response = await fetch(url); // Await the fetch request
      console.log('test2 ');
      if (!response.ok) {
        throw new Error("Failed to fetch tasks.");
      }
      console.log('test3 ');
      let listData = await response.json(); // Await the response to parse JSON
      console.log(listData)
      if(listData == null)
      {
        listData = {}
      }
      if(!shallowEqual(listData, data))
      {
        setData(listData);
      }
      console.log(data);
      
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
    }

    itemFetch()
    return(console.log('fetch REFRESH'));
  }, [data, update]);
  
  


  return (
    <div className="relative top-20 h-[100vh] w-[98.5vw]">
      {isNewTask && <AddNewTask setToggleUpdate={setToggleUpdate} setNewAdd={setIsNewTask} />}

      <div className=" absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex mt-16 gap-12 flex-col  items-center justify-center">
        <h1
          className={`${
            ctx.darkMode ? "text-white" : "text-primary-dark"
          } text-4xl font-semibold`}
        >
          TODO LIST
        </h1>
        <div className="flex flex-row relative  gap-4">
          <input disabled placeholder="Feature Comming SOON"
            className={` p-[6px] indent-1 w-[600px] ${
              ctx.darkMode
                ? " outline-gray-300 ring-white"
                : "outline-secondary-light ring-secondary-dark"
            } border-secondary-lightrounded-md ring-2 rounded-md outline-1 outline-offset-4 `}
            type="text"
          />
          <img
            className="w-6 h-6  absolute top-[6px] right-14 cursor-pointer hover:w-8 hover:h-8 hover:top-[2px] transition-all duration-300"
            src="/search.png"
            alt="search"
          />
          <button
            onClick={newTaskToggle}
            className=" rounded-full hover:shadow-lg hover:shadow-gray-500  p-2 font-semibold bg-secondary-light text-white "
            type="button"
          >
            <img className="w-5 h-5   " src="/plus.png" alt="+" />
          </button>
        </div>
        <div className={`self-start flex-grow w-4/5 ${shallowEqual(data,{}) ?'' : 'overflow-y-scroll scroll-smooth touch-auto'} h-[60vh] mx-10`}>

          {shallowEqual(data,{}) ? <img className="w-3/4 h-72" src="/empty.png" alt="empty" />:
          Object.entries(data).map(([key, value] , index)=>{
            console.log(value);
            return <FetchList setToggleUpdate={setToggleUpdate} key={index} id={index+1}  noteId={key} noteValue={value} />
          })}
        </div>
      </div>
    </div>
  );
}
