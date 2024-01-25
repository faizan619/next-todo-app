import { connectDB } from "@/app/(database)/conn/db";
import { User } from "@/app/(database)/models/user";
import { NextResponse } from "next/server";

connectDB()

export const GET = async(request)=>{
    let users = [];
    try {
        users = await User.find();
        return NextResponse.json(users)
    } catch (error) {
        return NextResponse.json({
            message:"Cannot Fetch Users Data",
            status:false
        })
    }
}