import { getResponseMessage } from "@/app/(database)/conn/responseMessage";
import { Task } from "@/app/(database)/models/task"
import { NextResponse } from "next/server";

export async function GET(request,{params}){
    const {userid} = params
    console.log(userid)
    try {
        let tasks = await Task.find({userId:userid});
        return NextResponse.json(tasks)
    } catch (error) {
        console.log("Cannot find any task of the user")
        return getResponseMessage("Failed to Get tasks",404,false)
    }
}