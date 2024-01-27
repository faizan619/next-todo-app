"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { RegisterSer } from "@/services/userService";

export default function Register() {
  let [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    profileURL:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
  });

  const doRegister = async (event) => {
    event.preventDefault();
    console.log(event);
    if (data.name.trim() === "" || data.name === null) {
      toast.dismiss();
      toast.warning("Name is Required !!", {
        position: "top-center",
      });
    } else {
      try {
        const result = await RegisterSer(data);
        console.log(result);
        toast.success("User is Register!!");
        setData({
          name: "",
          email: "",
          password: "",
          about: "",
        });
      } catch (error) {
        console.log(error);
        toast.error("Error: " + error.response.data.message, {
          position: "top-center",
        });
      }
    }
  };

  const resetForm = () => {
    setData({
      name: "",
      email: "",
      password: "",
      about: "",
    });
  };

  return (
    <div className="border flex flex-col items-center py-5">
      <h1 className="text-2xl">Register</h1>
      <form className="flex flex-col gap-2 my-2 w-1/3" onSubmit={doRegister}>
        <label>
          <h1 className="text-xl">Name:</h1>
          <input
            className="px-3 py-1 text-black rounded-md w-full"
            type="text"
            placeholder="Faizan alam"
            value={data.name}
            onChange={(event) => setData({ ...data, name: event.target.value })}
          />
        </label>
        <label>
          <h1 className="text-xl">Email:</h1>
          <input
            className="px-3 py-1 text-black rounded-md w-full"
            type="email"
            placeholder="faizan@gmail.com"
            value={data.email}
            onChange={(event) =>
              setData({ ...data, email: event.target.value })
            }
          />
        </label>
        <label>
          <h1 className="text-xl">password:</h1>
          <input
            className="px-3 py-1 text-black rounded-md w-full"
            type="text"
            placeholder="password"
            value={data.password}
            onChange={(event) =>
              setData({ ...data, password: event.target.value })
            }
          />
        </label>
        <label>
          <h1 className="text-xl">About:</h1>
          <textarea
            rows={4}
            className="px-3 w-full py-1 text-black rounded-md"
            type="text"
            placeholder="i am glad to come here"
            value={data.about}
            onChange={(event) =>
              setData({ ...data, about: event.target.value })
            }
          />
        </label>
        {/* <label>
          <h1 className="text-xl">ProfileURL:</h1>
          <input className="px-3 py-1 text-black rounded-md w-full" type="text" placeholder="my url link here" value={data.profileURL} onChange={(event)=>setData({...data,profileURL:event.target.value})} />
        </label> */}
        <div className="my-2 flex justify-evenly">
          <button
            type="submit"
            className="border px-3 text-green-600 border-green-600 hover:bg-green-600 hover:text-white hover:border-white transition-all py-1 rounded-md"
          >
            Submit
          </button>
          <button
            onClick={resetForm}
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
