"use client"

import { useState } from "react"

export default function Page(){
    let [title,setTitle] = useState("")
    let [content,setContent] = useState("")
    return(
        <div className="flex flex-col items-center gap-2">
            <h1>Create Your Task</h1>
            <form className="flex flex-col gap-3 border px-5 py-5 rounded-lg">
                <label>
                    <p>Title</p>
                    <input className="text-black px-2 rounded-md py-1" type="text" placeholder="Enter Title" value={title} onChange={(e)=>{setTitle(e.target.value)}} />
                </label>
                <label>
                    <p>Content</p>
                    <textarea className="text-black px-2 rounded-md py-1 w-full " type="text" placeholder="Enter Content" value={content} onChange={(e)=>{setContent(e.target.value)}} />
                </label>
                <button type="submit" className="border text-green-600 border-green-600 hover:bg-green-600 hover:text-white hover:border-white transition-all py-1 rounded-md">Submit</button>
            </form>
        </div>
    )
}