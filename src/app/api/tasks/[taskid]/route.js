import { getResponseMessage } from "@/app/(database)/conn/responseMessage";
import { Task } from "@/app/(database)/models/task";
import { NextResponse } from "next/server";

export async function GET(request,{params}){
    const {taskid} = params
    try {
        const task = await Task.findById(taskid);
        return NextResponse.json(task);


        // return NextResponse.json({
        //     message:"testing params",
        //     param:params
        // })

    } catch (error) {
        return getResponseMessage("Cannot Fetch Task",404,false);
        // return NextResponse.json({
        //     message:"Cannot fetch task",
        //     status:false
        // })
    }

} 

export async function PUT(request,{params}){
    try {
        const {taskid} = params;

        const {title,content,status} = await request.json();

        let task = await Task.findById(taskid)

        task.title = title
        task.content = content
        task.status = status

        const updatedTask = await task.save();
        return NextResponse.json(updatedTask)
    } catch (error) {
        console.log("Error in editing the task")
        return getResponseMessage("Error in Updating the task",500,false)
    }
}

export async function DELETE(request,{params}){
    try {
        const {taskid} = params;

        await Task.deleteOne({
            _id:taskid,
        });

        return getResponseMessage("Tasks deleted successfully",200,true)
    } catch (error) {
        console.log("Cannot delete the message")
        return getResponseMessage("Cannot Delete the Task",500,false)
    }
}