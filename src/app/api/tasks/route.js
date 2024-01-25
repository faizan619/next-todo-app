import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
        message:"Testing the Task Api"
    })
}