"use client";
import { useEffect, useState } from "react";
import UserContext from "./userContext";
import { currentUser } from "@/services/userService";
import { toast } from "react-toastify";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    async function load() {
      try { 
        const logUser = await currentUser();
        console.log("log user : ", logUser);
        setUser({ ...logUser });
        console.log("user provider :",user)
      } catch (error) {
        console.log("userprovider error : ",error);
        toast.error("Error in Loading current user..");
        setUser(undefined);
      }
    }
    load();
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
