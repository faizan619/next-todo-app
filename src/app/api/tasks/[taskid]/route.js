import { NextResponse } from "next/server";

export function GET(request,{params}){
    const {taskid} = params
    try {
        return NextResponse.json({
            message:"testing params",
            param:params
        })
    } catch (error) {
        return NextResponse.json({
            message:"Cannot fetch task",
            status:false
        })
    }

}