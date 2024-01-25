import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
        message:"This is just for testing",
        status:true
    })
}