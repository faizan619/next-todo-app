"use client"
import { useRouter } from "next/navigation";

export default function Button(props){
    const router = useRouter()
    return(
        <button className="px-3 py-1 rounded-md border transition-all hover:bg-white hover:text-black" onClick={()=>router.push(`${props.url}`)}>{props.title}</button>
    )
}