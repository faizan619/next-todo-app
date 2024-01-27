import { httpAxios } from "@/app/(database)/conn/httpHelper";

export async function RegisterSer(user){
    const result = await httpAxios.post("/api/users",user).then((response)=>response.data)
    return result
}