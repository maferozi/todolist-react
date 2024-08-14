import { useContext, useRef } from "react";
import { AuthContext } from "../context/AuthContent";
import { useNavigate } from "react-router-dom";


export default function Register() {
    const navigate = useNavigate();
  const emailInputRef = useRef();
  const passInputRef = useRef();
const ctx = useContext(AuthContext);


  function onSubmitHandler(event) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPass  = passInputRef.current.value;

    if(ctx.isLoggedIn)
    {

    }
    else{
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC2ub2LklTbhGgOXt6_tRrxY3O8kboYzkM',
            {method: 'POST',
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPass,
                    returnSecureToken: true,
                }),
                headers: {
                    'Content-Type':'application/json'
                }
            }
        ).then((res)=>{
            if(res.ok){
                return res.json().then((data)=> {
                  ctx.setLogin(data.idToken, data.email ,((+data.expiresIn)*1000));
                    navigate('/todolist', { replace: true })
                })
            }
            else{
                return res.json().then((data)=> console.log(data));
            }
        }).catch(err=> console.log(err))
    }
    

  }

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6  lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className={`mt-10 text-center text-2xl font-bold leading-9 tracking-tight ${ctx.darkMode? 'text-white' :'text-gray-900'}`}>
            Register up
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={onSubmitHandler} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className={`block text-sm font-medium leading-6 ${ctx.darkMode? 'text-white' :'text-gray-900'}`}
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  ref={emailInputRef}
                  required
                  className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 indent-2 ring-inset ring-secondary-dark placeholder:text-secondary-light focus:ring-2 focus:ring-secondary-light  focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className={`block text-sm font-medium leading-6 ${ctx.darkMode? 'text-white' :'text-gray-900'}`}
                  >
                  Password
                </label>
                
              </div>
              <div className="mt-2">
                <input
                    ref={passInputRef}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 indent-2 ring-inset ring-secondary-dark placeholder:text-secondary-light focus:ring-2 focus:ring-secondary-light  focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </form>

          
        </div>
      </div>
    </>
  );
}
