import React,{useState} from "react";
import styles from "../style";
import { discount, robot,family,imac } from "../assets";
import { GetStarted } from "./index";
import axios from "axios";
import APIURL from "../apiUrl";
import { useNavigate } from "react-router-dom";


const Hero = () => {
  const [logins,setLogins] = useState({})
  const [err,setError] = useState(false)
  const [errMsg,setErrorMsg] = useState('')
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin=(e)=>{
    setLoading(true)
    e.preventDefault()
    const login = async()=>{
      await axios.post(`${APIURL}/user/login`, {...logins} )
      .then(res=>{
          if(res.status === 200){
              localStorage.setItem("token", res?.data);
              navigate('/dashboard',{replace:true})
              setLoading(false)
          }
      }).catch(err=>{
        setErrorMsg(err.message)
        setError(true)
        setErrorMsg('Invalid Credentials')
        setLoading(false)
      })

    }

    login()
    
  }
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <section className="flex-1 flex justify-center items-center flex-col xl:px-0 sm:px-16 px-6 ">
        <div className="w-full">
          <div className=" bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              
              <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
              {err ? <p className="text-red-600 text-center">{errMsg}</p> : ''}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                    onChange={e=>setLogins({...logins,email:e.target.value})}
                    onFocus={()=>setError(false)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    onChange={e=>setLogins({...logins,password:e.target.value})}
                    onFocus={()=>setError(false)}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  {loading ? 'Verifying.....' : 'Sign In'}
                </button>
                
              </form>
            </div>
          </div>
        </div>
      </section>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:mr-0  my-10 relative`}
      >
        <img
          src={imac}
          className="w-[100%] h-[100%] relative z-[5]"
          alt=""
        />
        {/* <div classNameName="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div classNameName="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
        <div classNameName="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
      </div>
    </section>
  );
};

export default Hero;
