"use client";

import { login } from "@/services/userService";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import UserContext from "../context/userContext";

export default function Register() {
  const router = useRouter()
  const context = useContext(UserContext)
  let [data, setData] = useState({
    email:'',
    password:'',
  });

  const handleSubmit = async(event)=>{
    event.preventDefault();
    console.log(data)
    if(data.email.trim() === "" && data.password.trim() === ""){
      toast.error("Please Enter All the Credentials");
      return
    }

    try {
      const result = await login(data)
      console.log(result)
      toast.success("Logged In")
      context.setUser(result.user)
      router.push("/profile/user")


    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  return (
    <div className="border flex flex-col items-center py-5">
      <h1 className="text-2xl">Login</h1>
      <form className="flex flex-col gap-2 my-2 " onSubmit={handleSubmit}>
        <label>
          <h1>Email:</h1>
          <input className="px-3 py-1 text-black rounded-md" type="email" placeholder="faizan@gmail.com" value={data.email} onChange={(event)=>setData({...data,email:event.target.value})} autoFocus />
        </label>
        <label>
          <h1>password:</h1>
          <input className="px-3 py-1 text-black rounded-md" type="text" placeholder="password" value={data.password} onChange={(event)=>setData({...data,password:event.target.value})} />
        </label>
        <div className="my-2 flex justify-evenly">
          <button
            type="submit"
            className="border px-3 text-green-600 border-green-600 hover:bg-green-600 hover:text-white hover:border-white transition-all py-1 rounded-md"
          >
            Submit
          </button>
          <button
            type="reset"
            className="border border-red-600 text-red-600 px-3 py-1 rounded-md hover:bg-red-600 hover:text-white hover:border-white"
          >
            Clear
          </button>
        </div>
      </form>
      {/* {JSON.stringify(data)} */}
    </div>
  );
}
