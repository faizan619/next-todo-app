"use client"
import { useRouter } from "next/navigation"
import Button from "./Button"

export default function Navbar(){
    const router = useRouter()
    return(
        <nav className="border px-3 py-1 flex mb-5 justify-between items-center">
            <div>
                <img src="https://logo.com/image-cdn/images/kts928pd/production/af1ea93aab7965318ba4d44ee3bd13b9fc1de8da-731x731.png?w=640&q=72"  width={60}/>
            </div>
            <div>
                <ol className="flex gap-3 text-md">
                    <li className="border hover:border-b-slate-200 cursor-pointer border-black px-2 py-1" onClick={()=>router.push("/")}>Home</li>
                    <li className="border hover:border-b-slate-200 cursor-pointer border-black px-2 py-1" onClick={()=>router.push("/create")}>Create Task</li>
                    <li className="border hover:border-b-slate-200 cursor-pointer border-black px-2 py-1" onClick={()=>router.push("/view")}>View Task</li>
                </ol>
            </div>
            <div className="flex gap-3">
                <Button title="login" url="/login"/>
                <Button title="Register" url="/register"/>
            </div>
        </nav>
    )
}